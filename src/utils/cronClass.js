const request = require('request');
const httpStatus = require('http-status-codes');
const post = require('../models/postModel');
class Entries {
    constructor(){
        this.url = 'http://hn.algolia.com/api/v1/search_by_date?query=nodejs';
    }

    fetch() {
        request(this.url, (error, response, body) => {
            if(error) {
                console.log('error:', error); // Print the error if one occurred
                return;
            }
            const { hits } = JSON.parse(body);

            try {
                post.insertMany(hits,{ ordered: true },function (error, inserted) {
                    if (error) {
                        console.error(error);
                    }
                    else {
                        console.log("Successfully inserted: ", inserted);
                    }
                })
            } catch (error) {
                console.error(error);
            }



            // console.log('a', hits);
            // console.log('body:',JSON.parse(body)); // Print the HTML for the Google homepage.
            return;
        });
    }
}

module.exports = new Entries() 
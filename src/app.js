const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config/mongo')
const cors = require('cors');

const app = express();

const Entries  = require('./utils/cronClass')

app.use(cors());

app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET','POST','DELETE','PUT','OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next()
});

const posts = require('./routes/postRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', posts);

app.listen(3000, () => {
    Entries.fetch();
    setInterval(() => Entries.fetch() , 60*60*1000);
});
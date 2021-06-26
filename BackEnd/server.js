const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const workShopAPI = require('./src/api/workShopAPI');
const workShopPaymentAPI = require('./src/api/workShopPaymentAPI');
const attendeeAPI = require('./src/api/attendeeAPI');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
/**
 * Get MONGODB_URI from .env
 */
const MONGODB_URI = process.env.MONGODB_URI;

/**
 * Connect to mongoDB using mongoose
 */
mongoose.connect(MONGODB_URI,{
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false
},(err) => {
    if (err) {
        console.log('DB error: ', err.message);
    }
});

mongoose.connection.once('open',()=>{
    console.log('DB Synced');
});

app.route('/').get((req, res) => {
    res.send('AF Conference Planner');
});

//API endpoints
app.use('/workshop', workShopAPI());
app.use('/workshoppayment', workShopPaymentAPI());
app.use('/attendee', attendeeAPI());


app.listen(PORT,()=>{
    console.log(`server is up on PORT ${PORT}`);
});
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const authRoute = require('./rotues/auth');



const app = express();
connectDB();
//Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(morgan('tiny'));



app.use('/api/user', authRoute);


const port = process.env.PORT || 8000


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});
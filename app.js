const express = require('express');
const app = express();


const router = require('./routers/HomeRouter');
const cors = require("cors");
const dotenv  =require('dotenv');
dotenv.config();

const PORT  = process.env || 5000;

app.use(router);
app.use(cors());




app.listen(PORT, () =>{
    console.log(`app listening on port ${PORT}`);
})















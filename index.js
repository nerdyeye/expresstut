const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv/config');

const PORT = process.env.PORT || 5000;
const path = require('path');

const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use('/users', require('./routes/users'));


mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        app.listen(PORT, function(){
            console.log(`Server is running at port ${PORT} and database connected`);
        })
    })
    .catch((error)=>console.log(error.message))

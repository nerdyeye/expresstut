const mongoose = require('mongoose');

const userSchema =  mongoose.Schema({
    name:{
        type:'string',
        required: true
    },
    password:{
        type:'string',
        required:true
    }
});

module.exports = mongoose.model('Users', userSchema);
const User = require ('./../models/Users');

const index = async(req, res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){  
        res.json({message:err})
    }
}

module.exports = {index}
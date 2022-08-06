const express = require('express');
const router = express.Router();
const User = require('./../models/Users')
const userController = require('./../controllers/userController');

const users = [
    {
        id:1,
        name:'summy',
        age:22
    },
    {
        id:2,
        name:'john',
        age:20
    }
]


// router.route('/').get((req, res)=>{
//     res.json(users)
// }).post((req, res)=>{
//     res.send('create or add new user')
// })

router.route('/').get(userController.index)
.post(async(req, res)=>{
    const post = new User({
        name:req.body.name,
        password:req.body.password
    });
    
    try{
        const newUser = await post.save();
        res.json(newUser);
    }catch(err){
        res.json({message:err})
    }

    // post.save()
    //     .then(data=>res.json(data))
    //     .catch(err=> res.json({message:err}))
})



router.route('/:id').get( async(req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.json(user)
    }catch(err){
        res.status(500).json(err.message)
    }
    // if(req.params.id > 2){
    //     res.status(400).json([{msg:'user does not exits'}])
    // }else{
    //     res.send(`This will get a single user with id ${req.params.id}`)
    // }
}).put( async(req, res)=>{
    try{
        const updated = await User.updateOne(
            {_id:req.params.id}, 
            {name:req.body.name, password:req.body.password}
        )
        res.json(updated);
    }catch(err){
        res.status(500).json(err.message)
    }
}).delete( async(req, res)=>{
    try{
        const remove = await User.deleteOne({_id:req.params.id});
        res.json(remove);
    }catch(err){
        res.status(500).json(err.message)
    }
    //res.send(`This will delete a single user with id ${req.params.id}`)
})


module.exports = router;
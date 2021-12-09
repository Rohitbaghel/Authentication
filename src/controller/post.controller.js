const express = require('express');

const Post = require('../model/post.model')
const authenticate = require('../middleware/authonticate')

const router = express.Router();

router.get("",authenticate, async (req, res) => {
    try{
 
        const User = await Post.find().lean().exec()
     return res.status(200).json(User);

    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"})
    }
})


router.post("",authenticate,  async (req, res) => {
    try{
const user = req.user
console.log(user)

        const post = await Post.create({
            title:req.body.title,
            body:req.body.body,
            user:user.user._id
        })

        res.status(201).json(post)

    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"})
    }
})




module.exports = router
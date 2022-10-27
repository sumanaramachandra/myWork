const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

//POST create data
router.post('/', async (req,res)=>{
    //console.log(req.body)
    const postData = new Post({
        user:req.body.user,
        title:req.body.title,
        text:req.body.text,
        hashtag:req.body.hashtag,
        location:req.body.location,
        url:req.body.url
    })

    try{
        const postToSave = await postData.save()
        res.send(postToSave)

    }catch(err){
        res.send("sorry error")
    }
    

})

//GET read all data
router.get('/', async (req,res)=>{
    try{
        const getPost = await Post.find()
        res.send(getPost)
    }catch(err){
        res.send('Some error while getting the post data')
    }
})

//GET based on requirement
router.get('/:postid', async (req,res)=>{
    try{
        const getByPost = await Post.findById(req.params.postid)
        res.send(getByPost)
    }catch(err){
        res.send("some error while getting something")
    }
})

//PATCH a data
router.patch('/:postid', async (req,res)=>{
    
    try{
        const postPatchById = await Post.updateOne(
            {_id:req.params.postid},
            {$set:{
                user:req.body.user,
                title:req.body.title,
                text:req.body.text,
                hashtag:req.body.hashtag,
                location:req.body.location,
                url:req.body.url
                  }
            }

        )
        res.send(postPatchById)
    }catch(err){
        res.send('Some error while patching')
    }
})

//DELETE post
router.delete('/:postid', async(req,res)=>{
    try{
        const postDelId = await Post.deleteOne({_id:req.params.postid})
        res.send(postDelId)
    }catch(err){
        res.send('some while deleting')
    }
})
module.exports = router
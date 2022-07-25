import Post from '../models/Post.js'
import {uploadImage, deleteImage} from '../libs/cloudinary.js'
import fs from 'fs-extra'
export const getPosts = async (req, res) => {
    try{
        const posts = await Post.find();
        res.send(posts);
    } catch(error) {
        console.error(error.message)
        res.status(500).json({message: error.message})
    }    
}

export const createPosts = async (req, res) => {
    try{
        const {title, description, precio, client} = req.body
        let image;

        if(req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath)
            await fs.remove(req.files.image.tempFilePath)
            image = {
                url: result.secure_url,
                public_id: result.public_id,
            }
        }
        const newPost = new Post({title, description, image, precio, client})
        await newPost.save()

        return res.json(newPost)
    } catch(error) {
        console.error(error.message)
        res.status(500).json({message: error.message})
    }
}

export const updatePosts = async (req, res) => {
    try{
        const updatedPost = await Post.updateOne({_id : req.params.id},req.params.id, req.body, { new: true })
        return res.send(updatedPost)
    } catch(error) {
        console.error(error.message)
        res.status(500).json({message: error.message})
    }    
}

export const deletePosts = async (req, res) => {
    try{
        const postRemoved = await Post.findByIdAndDelete(req.params.id)
        if(!postRemoved) return res.sendStatus(404)
        if(postRemoved.image.public_id) {
            await deleteImage(postRemoved.image.public_id)
        }
        return res.sendStatus(204)
    } catch(error) {
        console.error(error.message)
        res.status(500).json({message: error.message})
    }    
}

export const getPost = async (req, res) => {
    try{
        console.log(req.params.id)
        const post = await Post.find({client : req.params.id})
        if(!post) return res.sendStatus(404)
        return res.json(post)
    } catch(error) {
        console.error(error.message)
        res.status(500).json({message: error.message})
    }    
}
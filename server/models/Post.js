import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        url: String,
        public_id: String
    },
    precio: {
        type: String,
        require: true
    },
    client: {
        type: String,
        require: true
    }
})

export default mongoose.model('Post', postSchema)
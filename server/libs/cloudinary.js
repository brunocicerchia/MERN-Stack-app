import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name: "dkxpqwify",
    api_key: "683382822215214",
    api_secret: "25Fr-Wji-4tBIoQz4zzj1rxR-Eo"
})

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'posts'
    })
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}
import axios from 'axios'

export const getPostRequest = async idClient => await axios.get(`/posts/${idClient}`)

export const createPostRequest = async (post) => await axios.post('/posts', post)

export const deletePostRequest = async id => await axios.delete(`/posts/${id}`)
import { useState, createContext, useContext, useEffect } from "react";
import { getPostRequest, createPostRequest, deletePostRequest } from "../api/posts";
import toast from 'react-hot-toast'
import {PostList} from "../components/PostsList";
import { useParams } from "react-router-dom";

const postContext = createContext();

export const usePosts = () => {
    const context = useContext(postContext)
    return context
}

const PostContainer = ({children}) => {
    const [posts, setPosts] = useState([])
    const [path, setPath] = useState('');

    const getPosts = async () => {
      
      const res = await getPostRequest(path)
      console.log(path)
      setPosts(res.data)
    }

    const createPost = async (post) => {
      const res = await createPostRequest(post)
      setPosts([...posts, res.data])
    }

    const deletePost = async id => {
      const res = await deletePostRequest(id)
      if(res.status === 204) {
        setPosts(posts.filter(post => post._id !== id))
        toast.success("El post se elimino correctamente")
      } else {
        console.log('Error al eliminar')
        toast.error("Ocurrio un error al eliminar el post")
      }      
    }

    useEffect(() => {
      getPosts()
    }, [])

  return (
    <postContext.Provider value={{
        posts,
        getPosts,
        createPost,
        deletePost,
        setPath
    }}>
        {children}
    </postContext.Provider>
  );
}

export default PostContainer;
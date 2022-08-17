import { usePosts } from "../context/postContext"
import {Link, useParams} from 'react-router-dom'
import { PostCard } from "./PostCard"
import { useEffect } from "react";

export function PostList() {
  const {posts, setPath} = usePosts()

  let { idClient } = useParams();
  useEffect(() => {
    setPath("idClient");
  }, [idClient]);

  if(posts.length === 0) return (
    <div className="flex flex-col justify-center items-center">
      <h1>No hay publicaciones aun!</h1>
    </div>
  )

  return (
    <div className="container">
      <Link to="/new" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Crear producto</Link>
      {posts.map(post => (
        <PostCard post={post} key={post._id} />
      ))}
    </div>
    
  )
}
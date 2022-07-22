import { usePosts } from "../context/postContext"
import {Link} from 'react-router-dom'

export function PostList() {

  const {posts} = usePosts()

  if(posts.length === 0) return (
    <div className="flex flex-col justify-center items-center">
      <h1>No hay publicaciones aun!</h1>
    </div>
  )

  return (
    <div className="container">
      <Link to="/new" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Crear producto</Link>
      {posts.map(post => (
        <div key={post._id}>
          {post.title}
        </div>
      ))}
    </div>
    
  )
}
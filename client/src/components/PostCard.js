import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import toast from 'react-hot-toast'
import { usePosts } from '../context/postContext'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export function PostCard({post}) {

    const {deletePost} = usePosts()

    const handleDelete = (title, id) => {
        toast((t) => (
            <div>
                <p>Estas seguro que quieres eliminar <strong>{title}</strong>?</p>
                <div>
                    <Button variant="danger" onClick={() => {
                        deletePost(id)
                        toast.dismiss(t.id)
                    }}>Eliminar</Button>{' '}
                    <Button variant="success" onClick={() => toast.dismiss(t.id)}>No eliminar</Button>{' '}
                </div>
            </div>
        ))
    }

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={post.image.url} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.description}</Card.Text>
          <Button variant="primary"><AiOutlineShoppingCart /> Agregar al carrito</Button>
          <Button variant="danger" onClick={() => handleDelete(post.title, post._id)} >Eliminar</Button>{' '}
        </Card.Body>
      </Card>
    </div>
  )
}
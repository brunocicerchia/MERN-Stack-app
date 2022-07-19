import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import { usePosts } from '../context/postContext'
import { useNavigate } from 'react-router-dom'

export function PostForm() {
  const {createPost} = usePosts()
  const navigate = useNavigate()
  return (
    <div>
      <Formik initialValues={{
        title: '',
        description: ''
      }} onSubmit={async (values, actions) => {
        await createPost(values)
        navigate('/')
      }} validationSchema={yup.object({
        title: yup.string().required('El titulo es requerido').max(50, 'El titulo no puede tener mas de 50 caracteres'),
        description: yup.string().required('La descripcion es requerida').max(200, 'La descripcion no puede tener mas de 200 caracteres')
      })}>
        {({handleSubmit}) => (
          <Form>
            <Field name="title" className='px-3 py-2 focus: outline-none rounded bg-gray-600 w-full' type="text" placehorlder="title"/>
            <ErrorMessage component="p" className='text-sm' name="title"/>
            <Field name="description" className='px-3 py-2 focus: outline-none rounded bg-gray-600 w-full' type="text" placehorlder="description"/>
            <ErrorMessage component="p" className='text-sm' name="description"/>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
        </Form>
        )}
        
      </Formik>
    </div>
  )
}
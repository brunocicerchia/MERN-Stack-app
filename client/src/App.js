import {HomePage, PostForm, NotFoundPage} from './pages/index';
import {Routes, Route} from 'react-router-dom';
import PostContainer from './context/postContext';

function App() {
  return (
    <div className='min-h-screen flex items-center'>
      <div className='px-10 m-auto'>
        <PostContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<PostForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PostContainer>
      </div>
      
    </div>
    
  );
}

export default App;
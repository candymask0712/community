import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPost from './pages/AddPost';
import List from './pages/List';
import NotFound from './pages/NotFound';
import PostDetail from './pages/PostDetail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List />}></Route>
        <Route path='/community/list' element={<List />}></Route>
        <Route path='/community/post/:post_pk' element={<PostDetail />}></Route>
        <Route path='/community/post/new' element={<AddPost />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

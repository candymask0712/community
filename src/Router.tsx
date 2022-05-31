import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header/Header';
import AddPost from './pages/AddPost';
import List from './pages/List';
import NotFound from './pages/NotFound';
import PostDetail from './pages/PostDetail';
import Main from './pages/Main';

function Router() {
  const location = window.location.pathname.split('/')[2];
  console.log('location', location);
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/community/list' element={<List />}></Route>
          <Route
            path='/community/post/:post_pk'
            element={<PostDetail />}
          ></Route>
          <Route path='/community/post/new' element={<AddPost />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header/Header';
import AddPost from './pages/AddPost';
import List from './pages/List';
import NotFound from './pages/NotFound';
import PostDetail from './pages/PostDetail';
import Main from './pages/Main';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <GlobalBackground>
      <GlobalContainer>
        <BrowserRouter>
          <Header />
          <ScrollToTop />
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
      </GlobalContainer>
    </GlobalBackground>
  );
}

export default Router;

const GlobalBackground = styled.div`
  /* background-color: #e5e5e5; */
  display: flex;
  justify-content: center;
  /* height: 100%; */
`;

const GlobalContainer = styled.div`
  background-color: white;
  width: 95%;
  /* max-width: 800px; */
  min-width: 360px;
  min-height: 100vh;
`;

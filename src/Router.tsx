import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header/Header';
import AddPost from './pages/AddPost';
import List from './pages/List';
import NotFound from './pages/NotFound';
import PostDetail from './pages/PostDetail';
import Main from './pages/Main';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Router() {
  const [categoryData, setCategoryData] = useState(1);
  const [titleData, setTitleData] = useState('');
  const [contentData, setContentData] = useState('');
  const [imageData, setImageData] = useState([]);

  const sendPostData = () => {
    axios
      .post('http://localhost:8080/posts', {
        category: categoryData,
        title: titleData,
        content: contentData,
        image: imageData
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <GlobalBackground>
      <GlobalContainer>
        <BrowserRouter>
          <Header sendPostData={sendPostData} />
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/community/list' element={<List />}></Route>
            <Route
              path='/community/post/:post_pk'
              element={<PostDetail />}
            ></Route>
            <Route
              path='/community/post/new'
              element={
                <AddPost
                  setCategoryData={setCategoryData}
                  setTitleData={setTitleData}
                  setContentData={setContentData}
                  setImageData={setImageData}
                />
              }
            ></Route>
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

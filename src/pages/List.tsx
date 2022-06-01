import styled from 'styled-components';
import ButtonBasic from '../components/common/Button/ButtonBasic';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../components/List/Post';
import Profile from '../components/common/Profile/Profile';
import Category from '../components/List/Category';
import Category2 from '../components/List/Category2';

export type DataType = {
  categoryPk: number;
  categoryName: string;
  pk: number;
  title: string;
  content: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  imageUrl: string | null | [];
  writtenAt: string;
  writerNickName: string;
  writerProfileUrl: string;
};

const Container = styled.div`
  font-family: 'Noto Sans KR';
`;

const Title = styled.h2`
  margin: 34px 0px 0px 30px;
`;

const AddButtonContainer = styled.div`
  /* position: sticky; */
  position: fixed;
  /* width: 100%; */
  bottom: 16px;
  right: 60px;
`;

const Line = styled.hr`
  height: 6px;
  background-color: #e8e8e8;
  border: 0;
`;

type TmpType = {
  [key: string]: DataType[];
};

const List = () => {
  const clickButton = () => {};
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState<any>({});
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    axios({
      url: 'http://localhost:8080/posts',
      method: 'get',
      data: {}
    }).then((reponse) => {
      setPosts(reponse.data);
      let tmp: TmpType = { 인기글: [], 전체: [] };
      for (let el of reponse.data) {
        tmp['전체'].push(el);
        if (el.viewCount >= 100) tmp['인기글'].push(el);

        const cat = el.categoryName;
        if (tmp[cat] === undefined) {
          tmp[cat] = [];
          tmp[cat].push(el);
        } else if (Array.isArray(tmp[cat])) {
          tmp[cat].push(el);
        }
      }
      // console.log('tmp', tmp);
      setFilteredPosts(tmp);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory !== '') setCurrentPosts();
  }, [selectedCategory]);

  const setCurrentPosts = () => {
    if (selectedCategory === '') setPosts(filteredPosts['전체']);
    else {
      setPosts(filteredPosts[selectedCategory]);
    }
  };

  return (
    <Container>
      <Title>커뮤니티</Title>

      <Category setSelectedCategory={setSelectedCategory} />

      {posts.map((el) => {
        return (
          <>
            <Profile data={el} />
            <Post data={el} />
            <Line />
          </>
        );
      })}
      <AddButtonContainer>
        <ButtonBasic
          buttonClickHandler={clickButton}
          backColor='#2C7FFF'
          textColor='white'
          height={10}
        >
          글쓰기✍
        </ButtonBasic>
      </AddButtonContainer>
    </Container>
  );
};

export default List;

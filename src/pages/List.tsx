import styled from 'styled-components';
import ButtonBasic from '../components/common/Button/ButtonBasic';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../components/List/Post';
import Category from '../components/List/Category';
import Category2 from '../components/List/Category2';
import Profile from '../components/common/Profile/Profile';

export type DataType = {
  categoryPk: number;
  categoryName: string;
  pk: number;
  title: string;
  content: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  imageUrl: string | null;
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
  position: fixed;
  bottom: 16px;
  right: 16px;
`;

const Line = styled.hr`
  height: 6px;
  background-color: #e8e8e8;
  border: 0;
`;
const List = () => {
  const clickButton = () => {};
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      url: 'http://localhost:8080/posts', // 통신할 웹문서
      method: 'get', // 통신할 방식
      data: {}
    }).then((reponse) => {
      setPosts(reponse.data);
      console.log(reponse.data);
    });
  }, []);

  return (
    <Container>
      <Title>커뮤니티</Title>
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
      {/* <Category /> */}
      {/* <Category2 /> */}

      {posts.map((el) => {
        // console.log(el);
        return (
          <>
            <Profile data={el} />
            <Post data={el} />
            <Line />
          </>
        );
      })}
    </Container>
  );
};

export default List;

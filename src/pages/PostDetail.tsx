import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DataType } from './List';
import Profile from '../components/common/Profile/Profile';

const PostDetail = () => {
  const path = window.location.pathname.split('/')[3];

  const [postData, setPostData] = useState<DataType>({
    categoryPk: 0,
    categoryName: '',
    pk: 0,
    title: '',
    content: '',
    viewCount: 0,
    likeCount: 0,
    commentCount: 0,
    imageUrl: null,
    writtenAt: '',
    writerNickName: '',
    writerProfileUrl: ''
  });

  useEffect(() => {
    axios({
      url: `http://localhost:8080/posts/${path}`, // 통신할 웹문서
      method: 'get' // 통신할 방식
    }).then((reponse) => {
      setPostData(reponse.data);
    });
  }, []);

  let content = viewSplitLine(postData.content);
  function viewSplitLine(content: string) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    const replace = (content: string) => {
      const convertContent = content.replace(urlRegex, function (url) {
        return '<a href="' + url + '" target="_blank">' + url + '</a>';
      });

      const htmlArr: string[] = [];
      convertContent.split('\n').forEach(function (text) {
        const textHtml: string = '<p>' + text + '</p>';
        htmlArr.push(textHtml);
      });

      return { __html: htmlArr.join('') };
    };

    return (
      <div>
        <div dangerouslySetInnerHTML={replace(content)}></div>
      </div>
    );
  }

  return (
    <Container>
      <Profile data={postData} />
      <Title>{postData.title}</Title>
      <Content>{content}</Content>
      {postData.imageUrl ? (
        Array.isArray(postData.imageUrl) ? (
          postData.imageUrl.map((el) => {
            return <Img src={el} />;
          })
        ) : (
          <Img src={postData.imageUrl} />
        )
      ) : null}
    </Container>
  );
};

export default PostDetail;

const Container = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #222222;
  margin: 19px 28px 25px 28px;
`;

const Content = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #7a7a7a;
  margin: 19px 28px 25px 28px;
`;

const Img = styled.img`
  height: 360px;
  margin: 10px 0px 0px 0px;
  width: 100%;
  object-fit: cover;
`;

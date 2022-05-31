import styled from 'styled-components';
import { DataType } from '../../pages/List';

type Data = {
  data: DataType;
};

const Post = ({ data }: Data) => {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Content>{data.content}</Content>
      {data.imageUrl ? <Img src={data.imageUrl} /> : null}
      <PostInfo>
        <PostInfoIcon src='img/eye.png'></PostInfoIcon>
        <PostInfoCount>{data.viewCount}</PostInfoCount>
        <PostInfoIcon src='img/thumb.png'></PostInfoIcon>
        <PostInfoCount>{data.likeCount}</PostInfoCount>
        <PostInfoIcon src='img/chat.png'></PostInfoIcon>
        <PostInfoCount>{data.commentCount}</PostInfoCount>
      </PostInfo>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  margin: 19px 28px 25px 28px;
  font-family: 'Noto Sans KR';
  font-style: normal;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 21px;
  color: #222222;
  margin: 0px 0px 15px 0px;
  height: 21px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;

const Content = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #7a7a7a;
  margin: 7px 0px 7px 0px;
  height: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;

const Img = styled.img`
  height: 160px;
  margin: 10px 0px 0px 0px;
  width: 100%;
  object-fit: cover;
`;

const PostInfo = styled.div`
  display: flex;
  margin: 10px 0px 0px 0px;
`;

const PostInfoIcon = styled.img`
  width: 16px;
  object-fit: contain;
`;

const PostInfoCount = styled.div`
  margin: 0px 22px 0px 6px;
  color: #7a7a7a;
  /* font-size: 14px; */
  font-weight: 500;
`;

const Line = styled.hr`
  height: 6px;
`;

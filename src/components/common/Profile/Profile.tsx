import { DataType } from '../../../pages/List';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

type Data = {
  data: DataType;
};

const Profile = ({ data }: Data) => {
  const { writerProfileUrl, writerNickName, categoryName } = data;
  let writtenAt = new Date(data.writtenAt);

  const [writtenAtDifference, setWrittenAtDifference] = useState('');

  useEffect(() => {
    getRelativeWrittenAt();
  }, [writtenAt]);

  const getRelativeWrittenAt = () => {
    const date = new Date();
    const elapsedMin = Math.floor(
      (date.getTime() - writtenAt.getTime()) / 1000 / 60
    );

    function dateFormat(writtenAt: Date) {
      let year = String(writtenAt.getFullYear()).split('').slice(2).join('');
      let month: number | string = writtenAt.getMonth() + 1;
      let day: number | string = writtenAt.getDate();

      month = month >= 10 ? month : '0' + month;
      day = day >= 10 ? day : '0' + day;

      return year + '-' + month + '-' + day + ' ';
    }

    if (elapsedMin < 1) setWrittenAtDifference('방금 전');
    else if (elapsedMin >= 1 && elapsedMin < 60)
      setWrittenAtDifference(`${elapsedMin}분 전`);
    else if (elapsedMin >= 60 && elapsedMin < 2400)
      setWrittenAtDifference(`${Math.floor(elapsedMin / 60)}시간 전`);
    else if (elapsedMin >= 2400)
      setWrittenAtDifference(`${dateFormat(writtenAt)}`);
  };

  return (
    <Container>
      <ImgBackground>
        <Img src={writerProfileUrl} />
      </ImgBackground>
      <TextContainer>
        <Id>{writerNickName}</Id>
        <CatAndTimeContainer>
          <Category>{categoryName}</Category>
          <UploadTime> ・ {writtenAtDifference}</UploadTime>
        </CatAndTimeContainer>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: 50px 0px 0px 32px;
`;
const ImgBackground = styled.div`
  background-color: pink;
  border-radius: 50%;
  padding: 6px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
`;
const Img = styled.img``;
const TextContainer = styled.div`
  margin: 0px 0px 0px 8px;
`;
const Id = styled.div`
  font-weight: 700;
`;
const CatAndTimeContainer = styled.div`
  font-weight: 500;
  color: #b4b4b4;
  font-style: normal;
`;
const Category = styled.span``;
const UploadTime = styled.span``;

export default Profile;

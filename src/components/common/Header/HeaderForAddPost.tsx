import styled from 'styled-components';
import ButtonBasic from '../Button/ButtonBasic';

const HeaderForAddPost = ({ sendPostData }: any) => {
  return (
    <Container>
      <div></div>
      <Title>글쓰기</Title>
      <CompleteButton>
        <ButtonBasic
          buttonClickHandler={() => {
            sendPostData();
          }}
          backColor='#2C7FFF'
          textColor='white'
          height={10}
        >
          완료
        </ButtonBasic>
      </CompleteButton>
    </Container>
  );
};

export default HeaderForAddPost;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h3``;

const CompleteButton = styled.div``;

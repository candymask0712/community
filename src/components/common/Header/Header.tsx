import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderForAddPost from './HeaderForAddPost';
import HeaderForPostDetail from './HeaderForPostDetail';

import { useEffect } from 'react';
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let path = location.pathname.split('/')[2];

  useEffect(() => {
    path = location.pathname.split('/')[2];
  }, [location]);

  const changingArea = () => {
    if (path === 'post') {
      let detailedPath = location.pathname.split('/')[3];
      if (detailedPath === 'new') return <HeaderForAddPost />;
      else return <HeaderForPostDetail />;
    } else return null;
  };

  return (
    <>
      {path === `list` ? null : (
        <Container>
          <BackButton
            onClick={() => {
              navigate(-1);
            }}
          >
            <BackButtonIcon src={`${process.env.PUBLIC_URL}/img/arrow.png`} />
          </BackButton>
          <ChangingContainer>{changingArea()}</ChangingContainer>
        </Container>
      )}
    </>
  );
};

export default Header;

const Container = styled.div`
  height: 56px;
  padding: 0px 0px 0px 21px;
  display: flex;
  /* background-color: yellow; */
  align-items: center;
`;
const BackButton = styled.div``;
const BackButtonIcon = styled.img`
  width: 25px;
  object-fit: contain;
`;
const ChangingContainer = styled.div``;

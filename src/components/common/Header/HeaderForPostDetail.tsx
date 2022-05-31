import React from 'react';
import styled from 'styled-components';
const HeaderForPostDetail = () => {
  return (
    <Container>
      <Mention>글 목록으로</Mention>
    </Container>
  );
};

const Container = styled.div``;
const Mention = styled.span`
  margin: 0px 0px 0px 11px;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  color: #b4b4b4;
`;

export default HeaderForPostDetail;

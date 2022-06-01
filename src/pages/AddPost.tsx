import styled from 'styled-components';
import UploadImage from '../components/AddPost/UploadImage';

const AddPost = ({
  setCategoryData,
  setTitleData,
  setContentData,
  setImageData
}: any) => {
  const sentences = `내용을 작성해주세요.`;

  const getCategory = (e: any) => {
    console.log(e.target.value);
    setCategoryData(e.target.value);
  };

  const getTitle = (e: any) => {
    setTitleData(e.target.value);
  };

  const getContent = (e: any) => {
    console.log(e.target.value);
    setContentData(e.target.value);
  };

  return (
    <Container>
      <Line />
      <CategoryContainer>
        <form>
          <SelectBox onChange={getCategory} name='language'>
            <option value={'none'}>질문/답변</option>
            <option value={1}>대선청원</option>
            <option value={2}>자유글</option>
            <option value={3}>질문/답변</option>
            <option value={4}>뉴스</option>
            <option value={5}>노하우</option>
          </SelectBox>
        </form>
      </CategoryContainer>
      <Line />
      <TitleInputContainer>
        <TitleInput defaultValue={'제목을 작성해 주세요'} onChange={getTitle} />
      </TitleInputContainer>
      <Line />
      <ContentInputContainer>
        <ContentInput defaultValue={sentences} onChange={getContent} />
      </ContentInputContainer>
      <UploadImage setImageData={setImageData} />
    </Container>
  );
};

export default AddPost;

const Container = styled.div``;

const Line = styled.hr`
  height: 1px;
  background-color: #e8e8e8;
  border: 0;
`;

const CategoryContainer = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
`;

const SelectBox = styled.select`
  height: 30px;
  padding-left: 10px;
  font-size: 18px;
  border: 0px;
  border-radius: 3px;
`;
const TitleInputContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const TitleInput = styled.input`
  width: 95%;
  border: 0px;
`;
const ContentInputContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ContentInput = styled.input`
  width: 95%;
  height: 200px;
  border: 0px;
  text-align: start;
`;

import styled from 'styled-components';
import { useState, useRef } from 'react';

const UploadImage = ({ setImageData }: any) => {
  const [showImages, setShowImages] = useState([]);
  const imgRef = useRef(null);

  const handleAddImages = (event: any) => {
    const imageLists = event.target.files;

    let imageUrlLists: any = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 6) {
      imageUrlLists = imageUrlLists.slice(0, 6);
    }

    setShowImages(imageUrlLists);
    setImageData(showImages);
  };

  const handleDeleteImage = (id: any) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  const onClickFileBtn = (e?: any) => {
    imgRef.current.click();
  };

  return (
    <Container>
      <Label
        htmlFor='input-file'
        onChange={(e) => {
          handleAddImages(e);
        }}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <ImageInput
          type='file'
          id='input-file'
          multiple
          ref={imgRef}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        <Plus />
        <ThumbnailContainer>
          {showImages.map((image, id) => (
            <div key={id}>
              <Thumbnail src={image} alt={`${image}-${id}`} />
              <DeleteContainer
                onClick={(e) => {
                  e.preventDefault();
                  handleDeleteImage(id);
                }}
              >
                <Delete src={`${process.env.PUBLIC_URL}/img/delete.png`} />
              </DeleteContainer>
            </div>
          ))}
        </ThumbnailContainer>
        <UploadButton
          onClick={(e) => {
            onClickFileBtn();
          }}
        >
          사진({showImages.length}/6)
        </UploadButton>
      </Label>
    </Container>
  );
};

export default UploadImage;

const Container = styled.div``;
const Plus = styled.div``;
const DeleteContainer = styled.div`
  position: absolute;
  background-color: black;
  opacity: 0.5;
`;
const Delete = styled.img`
  position: absolute;
  bottom: 50px;
  left: 60px;
  width: 20px;
  height: 20px;
`;
const ImageInput = styled.input`
  display: none;
`;
const UploadButton = styled.button`
  margin: 0px 0px 0px 20px;
  width: 86px;
  height: 32px;
  border: none;
  background: #dbe9ff;
  border-radius: 6px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  color: #2c7fff;
`;

const Thumbnail = styled.img`
  width: 89px;
  height: 83px;
  margin: 0px 0px 0px 16px;
  position: relative;
`;

const ThumbnailContainer = styled.div`
  margin: 0px 0px 0px 4px;
  display: flex;
  width: 89px;
  height: 83px;
`;

const Label = styled.label`
  width: 0px;
`;

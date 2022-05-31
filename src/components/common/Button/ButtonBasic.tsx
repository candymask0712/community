import styled from 'styled-components';

export const Button = styled.button<{
  backColor?: string;
  textColor?: string;
  height?: number;
}>`
  width: 100px;
  height: 52px;
  background-color: ${(props) => props.backColor};
  border: ${(props) => props.backColor};
  color: ${(props) => props.textColor};
  border-radius: 8px;
  font-family: 'roboto', 'Noto Sans KR';
  font-size: 16px;
  font-weight: 400;

  @media only screen and (max-width: 768px) {
    height: 3rem;
    font-size: 1rem;
  }

  &.small {
    width: 90px;
    height: 45px;
    border-radius: 8px;
    font-size: 1rem;

    @media only screen and (max-width: 768px) {
      width: 70px;
      height: 40px;
      font-size: 14px;
    }
  }

  &.extraSmall {
    width: 50px;
    height: 30px;
    font-size: 14px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export interface ButtonBasicProps {
  type?: string;
  buttonClickHandler: React.MouseEventHandler;
  children: string;
  lightStyle?: boolean;
  backColor?: string;
  textColor?: string;
  height?: number;
}

function ButtonBasic({
  type,
  buttonClickHandler,
  children,
  backColor,
  textColor,
  height
}: ButtonBasicProps) {
  return (
    <Button
      className={type}
      onClick={buttonClickHandler}
      backColor={backColor!}
      textColor={textColor!}
      height={height!}
    >
      {children}
    </Button>
  );
}

export default ButtonBasic;

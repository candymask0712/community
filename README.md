- **코드가 포함 된 파일이 메일 첨부가 되지 않는 문제가 있어 부득이하게 github 업로드 하였습니다**
- **깃허브 업로드로 인해 달라진 부분이 있어 12시 이후 readme만 수정하였습니다**

## 실행방법

### 클라이언트 
(최상위 디렉토리에서)
1. `npm install` 로 의존성 모듈 설치
2. `npm run start` 로 클라이언트 실행 (http://localhost:3000/)

### 서버 
(최상위 디렉토리에서 server 디렉토리로 이동 후)
1. `npm install` 로 의존성 모듈 설치
2. `npm run start` 로 서버 실행 (http://localhost:8080/)

### 미구현 기능

### 글쓰기

1. 전송 버튼 누를 시 유효성 검사 시행

- if문과 정규식을 이용하여 조건 만족 시에만 전송

2. 등록한 사진 캐러샐 구현

- 카테고리와 동일한 방법을 사용하여 캐러샐 형태로 구현

3. 등록한 사진 전송

- 다른 데이터와 동일하게 post 요청에 body에 담아 전송

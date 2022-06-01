## 실행방법

### 클라이언트 (/callbus)

1. `npm install` 로 의존성 모듈 설치
2. `npm run start` 로 클라이언트 실행 (http://localhost:3000/)

### 서버 (/callbus/server)

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

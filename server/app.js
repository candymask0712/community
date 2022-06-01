import { createRequire } from 'module';
import { CATEGORIES } from './dummyData/CATEGORIES.js';
import { POSTS } from './dummyData/POSTS.js';

const require = createRequire(import.meta.url);
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
var cors = require('cors');

let num = 40;
app.use(cors());
app.use(bodyParser.json());
app.listen(8080, 'localhost', function () {
  console.log('listening on 8080');
});

app.get('/categories', function (req, res) {
  res.send(CATEGORIES);
});

app.get('/posts', function (req, res) {
  res.send(POSTS);
});
app.post('/posts', function (req, res) {
  console.log('req.body', req.body);
  // console.log('req.body', req.body.category);
  num++;
  let categoryName = CATEGORIES[req.body.category].categoryPk;
  let tmp = {
    categoryPk: req.body.category,
    categoryName: categoryName,
    pk: num,
    title: req.body.title,
    content: req.body.content,
    viewCount: 0,
    likeCount: 0,
    commentCount: 0,
    imageUrl:
      'https://images.unsplash.com/photo-1627743914480-5c0a391767f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    writtenAt: '2022-06-01T17:29:19',
    writerNickName: '손님',
    writerProfileUrl:
      'https://static.zaritalk.com/profiles/profile-57-img-fox-39-39%403x.png'
  };

  POSTS.push(tmp);
  // console.log(POSTS);
  res.send('전송완료');
});

app.get('/posts/:id', function (req, res) {
  let obj = {};
  for (let el of POSTS) {
    if (el.pk === Number(req.params.id)) {
      obj = el;
      el.viewCount += 1;
      res.send(obj);
      return;
    }
  }
});

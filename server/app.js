import { createRequire } from 'module';
import { CATEGORIES } from './dummyData/CATEGORIES.js';
import { POSTS } from './dummyData/POSTS.js';

const require = createRequire(import.meta.url);

const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());

app.listen(8080, 'localhost', function () {
  console.log('listening on 8080');
});

app.get('/categories', function (req, res) {
  res.send(CATEGORIES);
});

app.get('/posts', function (req, res) {
  res.send(POSTS);
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

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());

import { CATEGORIES } from './dummyData/CATEGORIES.js';
import { POSTS } from './dummyData/POSTS.js';

app.listen(8080, 'localhost', function () {
  console.log('listening on 8080');
});

app.get('/categories', function (req, res) {
  res.send(CATEGORIES);
});

app.get('/posts', function (req, res) {
  res.send(POSTS);
});

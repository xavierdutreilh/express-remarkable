# express-remarkable [![Build Status](https://travis-ci.org/xavierdutreilh/express-remarkable.svg?branch=master)](https://travis-ci.org/xavierdutreilh/express-remarkable) [![Coverage Status](https://coveralls.io/repos/github/xavierdutreilh/express-remarkable/badge.svg?branch=master)](https://coveralls.io/github/xavierdutreilh/express-remarkable?branch=master)

> An [Express](https://github.com/expressjs/express) engine to render Markdown views

## Installation

Install using npm:

```bash
npm install -S express-remarkable
```

## Usage

### Directory structure

```
.
├── app.js
└── views
    ├── index.md
    └── templates
        └── base.pug

2 directories, 3 files
```

### app.js

```javascript
const express = require('express');
const remarkable = require('express-remarkable');

const app = express();

app.engine('md', remarkable(app));

app.set('view engine', 'md');

app.get('/', (request, response) => {
  response.render('index');
});

app.listen(3000);
```

### views/index.md

```markdown
---
title: Hello, world!
template: templates/base.pug
---

OHAI
```

### views/templates/base.pug

```pug
doctype html
html
  head
    meta(charset='utf-8')
    title=meta.title
  body
    !=content
```

## License

`express-remarkable` is released under the [MIT license](http://en.wikipedia.org/wiki/MIT_License).

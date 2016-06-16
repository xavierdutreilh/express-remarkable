'use strict';

const Remarkable = require('remarkable');
const meta = require('remarkable-meta');

function render(content) {
  const markdown = new Remarkable();

  markdown.use(meta);

  const rendered = markdown.render(content);

  return {
    'content': rendered,
    'meta': markdown.meta,
  };
}

module.exports = render;

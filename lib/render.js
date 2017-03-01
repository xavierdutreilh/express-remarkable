const Remarkable = require('remarkable')
const meta = require('remarkable-meta')

function render (content, options) {
  const markdown = new Remarkable(options)

  markdown.use(meta)

  const rendered = markdown.render(content)

  return {
    'content': rendered,
    'meta': markdown.meta
  }
}

module.exports = render

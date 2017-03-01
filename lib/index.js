const fs = require('fs')

const render = require('./render')

function index (app) {
  return (filePath, options, callback) => {
    fs.readFile(filePath, 'utf8', (error, content) => {
      if (error) {
        return callback(new Error(error))
      }

      const rendered = render(content, options)

      if ('template' in rendered.meta) {
        return app.render(rendered.meta.template, rendered, callback)
      }

      callback(null, rendered.content)
    })
  }
}

module.exports = index

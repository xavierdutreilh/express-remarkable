'use strict';

const fs = require('fs');
const path = require('path');

const request = require('supertest');

const app = require(path.join(__dirname, '..', 'examples', 'basic', 'app'));

function read(filename) {
  return fs.readFileSync(filename, 'utf8');
}

describe('engine', () => {
  describe('when rendering a valid view', () => {
    describe('with metadata', () => {
      it('should render the view', (done) => {
        const expected = read(path.join(__dirname, 'expected', 'meta.html'));

        request(app).get('/meta').expect(200, expected).end(done);
      });
    });

    describe('without metadata', () => {
      it('should render the view', (done) => {
        const expected = read(path.join(__dirname, 'expected', 'index.html'));

        request(app).get('/').expect(200, expected).end(done);
      });
    });
  });

  describe('when rendering a missing view', () => {
    it('should render the 404 view', (done) => {
      request(app).get('/missing').expect(404).end(done);
    });
  });
});

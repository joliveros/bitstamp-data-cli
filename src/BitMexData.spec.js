import { expect } from 'chai';
import BitstampData from './BitstampData';
import nock from 'nock';
import path from 'path';

// load mocks for http requests
const nocks = nock.load(path.resolve(__dirname, '../data/nock.json')); // eslint-disable-line no-unused-vars

describe('BitstampData', () => {
  it('should return object with prices function', () => {
    return BitstampData()
      .then((api) => {
        expect(api.prices).to.be.a('function');
      });
  });
});

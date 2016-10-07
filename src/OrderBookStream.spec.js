import chai from 'chai';
import { expect } from 'chai';
import chaiStream from 'chai-stream-es6';
import OrderBookStream from './OrderBookStream';
import nock from 'nock';
import path from 'path';

// chai assertions for streams
chai.use(chaiStream);

// load mocks for http requests
// const nocks = nock.load(path.resolve(__dirname, '../data/nock.json')); // eslint-disable-line no-unused-vars

describe('OrderBookStream', () => {
  it('should return object with prices function', () => {
    expect(OrderBookStream()).to.be.a.ReadableStream;
  });
});

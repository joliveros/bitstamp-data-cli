import chai, { expect } from 'chai';
import chaiStream from 'chai-stream-es6';
import nock from 'nock';
import path from 'path';
import orderBookStream from './TransactionStream';

// chai assertions for streams
chai.use(chaiStream);

// load mocks for http requests
// const nocks = nock.load(path.resolve(__dirname, '../data/nock.json')); // eslint-disable-line no-unused-vars

describe('TransactionStream', () => {
  it('should return a valid readable stream', () => {
    expect(orderBookStream()).to.be.a.ReadableStream;
  });
});

import chai, { expect } from 'chai';
import chaiStream from 'chai-stream-es6';
// import nock from 'nock';
// import path from 'path';
import wsOrderBookStream from './WsOrderBookStream';

// chai assertions for streams
chai.use(chaiStream);

// load mocks for http requests
// const nocks = nock.load(path.resolve(__dirname, '../data/nock.json'));

describe('wsOrderBookStream', () => {
  it('should return a valid readable stream', () => {
    expect(wsOrderBookStream()).to.be.a.ReadableStream;
  });
});

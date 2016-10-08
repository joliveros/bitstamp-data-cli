import chai, { expect } from 'chai';
import chaiStream from 'chai-stream-es6';
// import nock from 'nock';
// import path from 'path';
import wsTradeStream from './WsTradeStream';

// chai assertions for streams
chai.use(chaiStream);

// load mocks for http requests
// const nocks = nock.load(path.resolve(__dirname, '../data/nock.json'));

describe('wsTradeStream', () => {
  it('should return a valid readable stream', () => {
    expect(wsTradeStream()).to.be.a.ReadableStream;
  });
});

import WsOrderBookStream from '../src/WsOrderBookStream';

const orderBookStream = new WsOrderBookStream();

orderBookStream.pipe(process.stdout);

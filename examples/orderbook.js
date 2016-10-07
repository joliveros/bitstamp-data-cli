import OrderBookStream from '../src/OrderBookStream';

const orderBookStream = new OrderBookStream();

orderBookStream.pipe(process.stdout);

import Bitstamp from 'bitstamp-bluebird';
import { Readable } from 'stream';

export default function OrderBookStream(interval = 1000) {
  if (interval < 1000) {
    throw new Error('to avoid rate limiting use a value greater than 1000 ms');
  }

  const orderBookStream = new Readable();
  const bitstamp = new Bitstamp();

  const readOrderBook = async function () {
    const result = await bitstamp.order_book();

    orderBookStream.push(JSON.stringify(result));
  };

  orderBookStream._read = () => {
    if (!orderBookStream.started) {
      orderBookStream.started = true;
      setInterval(() => readOrderBook(), interval);
    }
  };

  return orderBookStream;
}

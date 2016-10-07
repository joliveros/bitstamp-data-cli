import Bitstamp from 'bitstamp-bluebird';
import { Readable } from 'stream';

export default function OrderBookStream(interval = 100) {
  const orderBookStream = new Readable();
  const bitstamp = new Bitstamp();
  const readOrderBook = () => {
    bitstamp
  };

  orderBookStream._read = () => {
    if (!orderBookStream.started) {
      orderBookStream.started = true;
      setInterval(() => readOrderBook, interval)
    }
  };
  
  return orderBookStream;
}

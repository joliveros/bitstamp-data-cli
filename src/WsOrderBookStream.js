import Bitstamp from 'bitstamp-ws';
import { Readable } from 'stream';

export default function WsOrderBookStream() {
  const orderBookStream = new Readable();
  let bitstamp;

  const readOrderBook = data => orderBookStream.push(JSON.stringify(data));

  orderBookStream._read = () => {
    if (!orderBookStream.started) {
      orderBookStream.started = true;
      bitstamp = new Bitstamp({
        // force encrypted socket session
        encrypted: false,

        // BTC/USD market:
        live_trades: false,
        order_book: false,
        diff_order_book: true,
      });

      bitstamp.on('data', readOrderBook);
    }
  };

  return orderBookStream;
}

import Bitstamp from 'bitstamp-ws';
import { Readable } from 'stream';

export default function WsTradeStream() {
  const tradeStream = new Readable();
  let bitstamp;

  const readData = data => tradeStream.push(JSON.stringify(data));

  tradeStream._read = () => {
    if (!tradeStream.started) {
      tradeStream.started = true;
      bitstamp = new Bitstamp({
        // force encrypted socket session
        encrypted: false,

        // BTC/USD market:
        live_trades: true,
        order_book: false,
        diff_order_book: false,
      });

      bitstamp.on('trade', readData);
    }
  };

  return tradeStream;
}

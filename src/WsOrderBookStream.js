import { Readable } from 'stream';
import WebSocket from 'ws';

export default function WsOrderBookStream(instrument = 'XBTUSD') {
  const orderBookStream = new Readable();

  const readData = data => orderBookStream.push(data);

  orderBookStream._read = () => {
    if (!orderBookStream.started) {
      orderBookStream.started = true;

      // wss://www.bitmex.com/realtime?subscribe=instrument,orderBook:XBTZ14
      const websocket = new WebSocket(`wss://www.bitmex.com/realtime?subscribe=orderBookL2:${instrument}`);

      websocket.on('open', () => {
        websocket.on('message', readData);
      });
    }
  };

  return orderBookStream;
}

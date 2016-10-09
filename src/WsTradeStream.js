import { Readable } from 'stream';
import WebSocket from 'ws';

export default function WsTradeStream(instrument = 'XBTUSD') {
  const tradeStream = new Readable();

  const readData = data => tradeStream.push(JSON.stringify(data));

  tradeStream._read = () => {
    if (!tradeStream.started) {
      tradeStream.started = true;

      // wss://www.bitmex.com/realtime?subscribe=instrument,orderBook:XBTZ14
      const websocket = new WebSocket(`wss://www.bitmex.com/realtime?subscribe=trade:${instrument}`);

      websocket.on('open', () => {
        websocket.on('message', readData);
      });
    }
  };

  return tradeStream;
}

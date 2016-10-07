import Bitstamp from 'bitstamp-bluebird';
import { Readable } from 'stream';

export default function TransactionStream(interval = 1000) {
  if (interval < 1000) {
    throw new Error('to avoid rate limiting use a value greater than 1000 ms');
  }

  const transactionStream = new Readable();
  const bitstamp = new Bitstamp();

  const readTransactions = async function () {
    const result = await bitstamp.transactions();

    transactionStream.push(JSON.stringify(result));
  };

  transactionStream._read = () => {
    if (!transactionStream.started) {
      transactionStream.started = true;
      setInterval(() => readTransactions(), interval);
    }
  };

  return transactionStream;
}

import TransactionStream from '../src/TransactionStream';

const transactionStream = new TransactionStream();

transactionStream.pipe(process.stdout);

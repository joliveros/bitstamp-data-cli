import bitstamp from 'bitstamp-bluebird';

export default function PriceData() {
  const prices = () => {

  };

  // public methods
  const publicMethods = {
    prices,
  };

  return new Promise((resolve) => {
    bitstamp((api) => {
      Object.assign(publicMethods, {api});

      resolve(publicMethods);
    });
  });
}

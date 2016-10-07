bitstamp-streams
===========

[![Build Status](https://travis-ci.org/joliveros/bitstamp-streams.svg?branch=master)](https://travis-ci.org/joliveros/bitstamp-streams)
[![npm version](https://badge.fury.io/js/bitstamp-streams.svg)](http://badge.fury.io/js/bitstamp-streams)

Stream bitstamp rest api data


Install
-------

### Node.js

```shell
npm install --save-dev bitstamp-streams
```


### AMD

```javascript
define(function(require, exports, module) {
  const bitstampStreams = require('bitstamp-streams');
  const { OrderBookStream } = bitstampStreams;

  const orderBookStream = new OrderBookStream();

  orderBookStream.pipe(...);
});
```


### script tag

```html
<script src="bitstamp-streams.js"></script>
```

License
-------

[MIT](https://github.com/joliveros/bitstamp-streams/blob/master/LICENSE) (c) [joliveros](https://github.com/joliveros)

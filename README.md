bitmex-streams
===========

[![Build Status](https://travis-ci.org/joliveros/bitmex-streams.svg?branch=master)](https://travis-ci.org/joliveros/bitmex-streams)
[![npm version](https://badge.fury.io/js/bitmex-streams.svg)](http://badge.fury.io/js/bitmex-streams)

Stream bitstamp rest api data


Install
-------

### Node.js

```shell
npm install --save-dev bitmex-streams
```


### AMD

```javascript
define(function(require, exports, module) {
  const bitstampStreams = require('bitmex-streams');
  const { OrderBookStream } = bitstampStreams;

  const orderBookStream = new OrderBookStream();

  orderBookStream.pipe(...);
});
```


### script tag

```html
<script src="bitmex-streams.js"></script>
```

License
-------

[MIT](https://github.com/joliveros/bitmex-streams/blob/master/LICENSE) (c) [joliveros](https://github.com/joliveros)

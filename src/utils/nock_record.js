import nock from 'nock';
import BitstampData from '../BitstampData';
import fs from 'fs';
import path from 'path';

nock.recorder.rec({
  output_objects: true
});

BitstampData()
  .then(() => {
    const uri = path.resolve(__dirname, '../../data/nock.json');
    const dir = path.resolve(__dirname, '../../data');

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    return fs.writeFileSync(uri, JSON.stringify(nock.recorder.play()));

    process.exit();
  });

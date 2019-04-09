'use strict';

const fs = require('fs');
const util = require('util');

const events = require('./event-pool.js');
require('./logger.js');

const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

 
/**
 * alterFile takes in a file. Reads the file, converts the contents of the file to uppercase text and then writes the text back to the file while using promises. The events.emit trigger an event when something happens.
 */
const alterFile = (file) => {
  read(file)
  .then(data => {
    let text = Buffer.from(data.toString().toUpperCase());
    return write(file, text);
  })
  .then(() => events.emit('saveComplete', file))
  .catch(error => events.emit('eventError', error))

};

let file = process.argv.slice(2).shift();

alterFile(file);

'use strict';

const events = require('./event-pool.js');
/**
 * listens for the saveComplete event and then console logs that a file was read and re-written plus the file that was modified.
 */
events.on('saveComplete', (payload) => {
  console.log('A file was read and re-written', payload);
});
/**
 * listens for the eventError event and then console logs the error plus the file that was not read correctly.
 */
events.on('eventError', (payload) => {
  console.error('error', payload);
});


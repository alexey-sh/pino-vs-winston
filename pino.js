const { counter, pinoFile } = require('./constants');
const { getTestObj } = require('./helper');

const pino = require('pino')(pinoFile);

for (let i = 0; i < counter; i++) {
    pino.info(getTestObj(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua');
}
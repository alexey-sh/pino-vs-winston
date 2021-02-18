const { createLogger, transports } = require('winston');

const { counter, winstonFile } = require('./constants');
const { getTestObj } = require('./helper');


const logger = createLogger({
    transports: [new (transports.File)({ filename: winstonFile })]
});
for (let y = 0; y < counter; y++) {
    logger.info(getTestObj(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua');
}
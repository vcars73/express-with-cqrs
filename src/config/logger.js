const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;




const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
  format: combine(
    format.colorize(),
    format.json(),
    timestamp(),
    myFormat
  ),
  transports: [new transports.Console()]
});

  module.exports = logger
  
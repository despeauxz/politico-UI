import '@babel/polyfill';
import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import chalk from 'chalk';
import { createLogger, format, transports } from 'winston';

const logger = createLogger({
    level: 'debug',
    format: format.simple(),
    transports: [new transports.Console()]
});

dotenv.config();
const app = express();
const publicPath = path.join(__dirname, '../client', '/dist');
const { PORT: port = 8080 } = process.env;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, function serverListner() {
    logger.debug(`Server running on port ${chalk.magenta(port)}`);
});
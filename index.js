import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import { serverPort } from './config';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

routes(app);

// Http Server Config
const server = http.createServer(app);

server.listen(serverPort, () => {
	console.log(`Server running on port ${serverPort}`);
});
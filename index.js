import http from 'http';
import express from 'http';
import routes from './routes';
import { serverHost, serverPort } from './config';

const app = express();

routes(app);

// Http Server Config
const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Server running');
});

server.listen(serverPort, serverHost, () => {
	console.log(`Server running on ${serverHost}:${serverPort}`);
});
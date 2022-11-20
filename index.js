import http from 'http';
import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes';
import { serverPort } from './config';

const app = express();

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// passport middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

routes(app);

// passport.use(new LocalStrategy(
// 	(username, passport, done) => {
// 		User.findOne({ username: username }, (err, user) => {
// 			if (err) return done(err);
// 			if (!user) return done(null, false);
// 			if (!user.verifyPassword(password)) return done(null, false);
// 			return done(null, false);
// 		})
// 	}
// ));

// Http Server config
const server = http.createServer(app);

server.listen(serverPort, () => {
	console.log(`Server running on port ${serverPort}`);
});

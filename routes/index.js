const Routes = app => {
	// check server status
	app.get('/', (req, res) => res.send('Http Server running.'));
}

export default Routes;

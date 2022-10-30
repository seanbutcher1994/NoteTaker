
// Requiring express to gain access to the express methods
const express = require('express');

// gain access to the web js and api jsfile inside the router
const webRouter = require('./routes/web')
const apiRouter = require('./routes/api');

// putting the express method into a variable.
const app = express();

// defining the port number for the app to listen into. process.env allows for heroku.
const PORT = process.env.PORT || 6100;

// Middleware that allows use of assets files such as CSS and JS files
app.use(express.static(__dirname + '/public' ));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// use method puts the middleware function to the specified path.
app.use(webRouter);
app.use(apiRouter);

// listen function binds and listens to connections on the specified host and port.
app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT}`)
})
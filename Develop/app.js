
// Requiring express to gain access to the express methods
const express = require('express');

// gain access to the web js file inside the router
const webRouter = require('./routes/web')

// putting the express method into a variable.
const app = express();

// defining the port number for the app to listen into. process.env allows for heroku.
const PORT = process.env.PORT || 6100;


// use method puts the middleware function to the specified path.
app.use(webRouter);

// listen function binds and listens to connections on the specified host and port.
app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT}`)
})
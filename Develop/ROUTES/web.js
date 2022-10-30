
// Web js file is used to create the link from the app.js file to the relevant html files.
const router = require('express').Router();
const path = require('path');

router.get('/notes', (req, res) => {
    
    const notes = path.join(__dirname, '../public/notes.html');
    res.sendFile(notes);
});

router.get('/', (req, res) => {

    const index = path.join(__dirname, '../public/index.html');
    res.sendFile(index);
})

// it is then exported to be used in other files such as app.js
module.exports = router;
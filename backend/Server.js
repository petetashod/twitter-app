


const express = require('express');
const { appendFile } = require('fs');
const path = require('path');

const Server = express();
// Server.use('/', express.static(path.join(__dirname,'src/backend/build')))

Server.get('/api/test', (req, res) => {
    // res.send('working!')
    res.sendFile(path.join(__dirname,'/frontend/src/App.jsx'))
});

Server.listen(3000)
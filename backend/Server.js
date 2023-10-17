const axios = require('axios')
const express = require('express');
const path = require('path');
const token = process.env.TOKEN
const app = express();
const favTweetUrl = 'https://api.twitter.com/2/tweets/1711068230088077326'


app.use('/assets',express.static(path.join(__dirname,'../frontend/dist/assets')))

app.get('/api/test', (req, res) => {
    // res.send('working!')
    res.sendFile(path.join(__dirname,'../frontend/dist/index.html'));
});

// app.get('/api/tweets', (req, res) => {
//     const config = {
//         headers: { Authorization: `Bearer ${token}` }
//     };
//     axios.get(favTweetUrl)
//     .then(res => {console.log(res)})
//     .catch(err => {console.log(err)});
   
    
// });
app.listen(3000)
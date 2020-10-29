const express = require('express');

const app = express();

//Routes
app.get('/', (req, res) => {
   res.send('we are on the app') 
});

app.get('/posts', (req, res) => {
    res.send('we are on the posts') 
 });

// listening

app.listen(3000);
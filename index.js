require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

const { signInHandler } = require('./routeHandlers/signIn');
const { signOutHandler } = require('./routeHandlers/signOut');



app.get('/signIn', signInHandler)
app.post('/signOut', signOutHandler)




app.listen(port, () => console.log(`LMSS server running on port ${port}`))
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const path = require('path');
const axios = require('axios');
const fs = require('fs');

// const { signInHandler } = require('./routeHandlers/signIn');
// const { signOutHandler } = require('./routeHandlers/signOut');

app.use(express.static('public'));


app.get('/alphatab', async (req, res) => {
  const songFileLink = req.query.songFile;
    console.log('songFileLink: ', songFileLink);
  try {
    // Download the file from Google Drive link
    const response = await axios.get(songFileLink, {
      responseType: 'arraybuffer',
      maxBodyLength: Infinity,
    });

    // Define the local path to save the file
    const localFilePath = path.join(__dirname, 'public', 'downloadedFile.gp');

    // Save the file
    fs.writeFileSync(localFilePath, response.data);

    // Update your HTML file to use the downloaded file
    // Or serve the HTML file and handle the file path on the client side
    res.sendFile(path.join(__dirname, './alphatab.html'));
  } catch (error) {
    console.error('Error downloading the file:', error);
    res.status(500).send('Error downloading the file');
  }
});

// app.get('/signIn', signInHandler)
// app.post('/signOut', signOutHandler)




app.listen(port, () => console.log(`LMSS server running on port ${port}`))
const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
// import bodyParser from 'body-parser';


app.use(cors(
  { origin: ['https://reactdiplomka.netlify.app', 'https://angulardiplomka.netlify.app/home','https://vuediplomka.netlify.app', 'https://minigamesdiplomka.netlify.app'] }
));

const port = process.env.PORT || 3000;
const ALBUMS_ROOT_PATH = `/images`;
// GAME_PATH = `/game`;

//GALERIE


app.get(`${ALBUMS_ROOT_PATH}/:id`, (req, res) => {
  const imageId = req.params.id;
  fs.readFile(`./images/${imageId}.json`, 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('Image not found :( !');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// ZDE BUDE HRA
// app.get(`${GAME_PATH}/:id`, (req, res) => {
//   if (err) {
//     const destination = req.body.destination;
//     res.status(404).send('Game not found');
//   } else {

//   }
// })

app.listen(port, () => {
  console.log(`Jana API listening on port ${port}`);
});

import express from 'express';

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/recipes', (request, response) => {
  const recipes = [
    {
      _id: 1,
      label: 'New recipe',
      image: 'https://www.edamam.com/web-img/8e3/8e37cf891afe7cc4a88807233dafc424.jpg',
      source: 'Leites Culinaria',
    }
  ];
  return response.json(recipes);
});


app.all('/*', (request, response) => {
  return response.send(request.params['0']);
});

const PORT = 3001;

app.listen(PORT, (err) => {
  if (err) {
    return console.log('Error!', err);
  }
  return console.log(`Listening on port: ${PORT}`);
});

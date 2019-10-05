const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const axios = require('axios');
const bodyParser = require('body-parser');
const config = require('./server.config');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/github-repos/'));

app.post('/api/github-auth', (request, response) => {
  const params = {
    client_id: config.client_id,
    code: request.body.code,
    client_secret: config.client_secret
  };

  axios({
    method: 'post',
    url: 'https://github.com/login/oauth/access_token',
    params,
    headers: {
      accept: 'application/json'
    }
  }).then((res) => {
    response.send(res.data);
  }).catch((err) => {
    response.send(err);
  });
});

app.get('/api/github-repos', (request, response) => {
  axios({
    url: 'https://api.github.com/user/repos',
    headers: {
      Authorization: request.headers.authorization
    }
  }).then((res) => {
    response.send(res.data);
  }).catch((err) => {
    response.send(err);
  });
});

app.all('/*', function(request, response) {
  response.sendFile('/dist/github-repos/', { root: __dirname });
});

app.listen(port, (err) => {
  if (err) {
    return console.log('Error !!! ', err)
  }

  console.log(`Server Is Listening On Port: ${port}`)
});
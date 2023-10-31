const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

app.post('/dados-gerais', (req, res) => {
  const data = req.body;
  console.log("Dados recebidos: ", data);
  res.send("Requisicao POST bem-sucedida!");
});

app.post('/dados-com-nome-email', (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const data = req.body;
  console.log("Dados recebidos: ", data);
  res.send("Requisicao POST bem-sucedida! Nome: " + data.nome + ", E-mail: " + data.email);
});

app.post('/formulario', (req, res) => {
  const dados = req.body;
  console.log(dados);
  res.send('Dados recebidos: ' + JSON.stringify(dados));
});

app.get('/formulario', (req, res) => {
  res.sendFile(__dirname + '/formulario.html');
});

app.get('/submit', (req, res) => {
  res.sendFile(__dirname + '/resposta.html');
});

app.post('/soma', function (req, res) {
  var body = req.body;
  console.log(body);
  res.send('Response da requisição POST via rota /soma');
});

app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

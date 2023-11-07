var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo ;)');
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) {
    throw new Error('Não é possível dividir por zero.');
  }
  return a / b;
}

app.post('/soma', function (req, res) {
  
  if (!req.body.a || !req.body.b) {
    return res.status(400).json({ error: 'Os parâmetros "a" e "b" são obrigatórios.' });
  }
  var body = req.body;
  var resultado = soma(body.a, body.b);
  
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/subtracao', function (req, res) {
  
  if (!req.body.a || !req.body.b) {
    return res.status(400).json({ error: 'Os parâmetros "a" e "b" são obrigatórios.' });
  }

  var body = req.body;  
  var resultado = subtracao(body.a, body.b);

  
  res.send(`O resultado da subtração de ${body.a} por ${body.b} é ${resultado}`);
});


app.post('/multiplicacao', function (req, res) {
  
  if (!req.body.a || !req.body.b) {
    return res.status(400).json({ error: 'Os parâmetros "a" e "b" são obrigatórios.' });
  }

  var body = req.body;
  var resultado = multiplicacao(body.a, body.b);
 
  res.send(`O resultado da multiplicação de ${body.a} por ${body.b} é ${resultado}`);
});

app.post('/divisao', function (req, res) {
  
  if (!req.body.a || !req.body.b) {
    return res.status(400).json({ error: 'Os parâmetros "a" e "b" são obrigatórios.' });
  }

  var body = req.body;
  try {
   
    var resultado = divisao(body.a, body.b);

    res.send(`O resultado da divisão de ${body.a} por ${body.b} é ${resultado}`);
  } catch (error) {
   
    res.status(400).json({ error: error.message });
  }
});

const functions = require('@google-cloud/functions-framework');

functions.http('cadastrarLead', (req, res) => {
  // Permite que seu site envie dados para cá sem bloqueios de segurança
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  // Responde rápido a requisições de teste do navegador
  if (req.method === 'OPTIONS') {
    return res.status(204).send('');
  }

  // Pega os dados que você enviou pelo terminal ou site
  const { nome, email } = req.body;

  // Resposta organizada em formato JSON
  res.status(201).send({
    status: 'sucesso',
    mensagem: `Ola ${nome || 'visitante'}, seu lead foi cadastrado com o e-mail ${email || 'nao informado'}!`
  });
});
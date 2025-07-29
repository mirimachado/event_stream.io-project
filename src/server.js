const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();

// Middleware para ler corpo da requisição
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uri = 'mongodb://localhost:27017'; 
const client = new MongoClient(uri);
let db;

client.connect()
  .then(() => {
    db = client.db('meubanco'); 
    console.log('Conectado ao MongoDB');

    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch(err => console.error('Erro ao conectar no MongoDB:', err));

app.get('/', async (req, res) => {
  try {
    const cursor = await db.collection('data').find().toArray();
    res.json(cursor); 
  } catch (err) {
    res.status(500).send('Erro ao buscar dados');
  }
});

app.post('/create', async (req, res) => {
  try {
    await db.collection('data').insertOne(req.body);
    console.log('Salvo no banco de dados.');
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao salvar no banco de dados');
  }
});

app.get('/delete/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await db.collection('data').deleteOne({ _id: new ObjectId(id) });
    console.log("Deletado do banco de dados!");
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Erro ao deletar');
  }
});

app.get('/update/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.collection('data').findOne({ _id: new ObjectId(id) });
    res.json(result); 
  } catch (err) {
    res.status(500).send('Erro ao buscar dado para update');
  }
});

app.post('/update/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await db.collection('data').updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body }
    );
    console.log('Atualizado no banco de dados.');
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Erro ao atualizar dado');
  }
});

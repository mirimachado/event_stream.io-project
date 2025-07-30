require('dotenv').config();
const app = require('./server');
const connectToDatabase = require('./src/config/db');
const PORT = process.env.PORT || 3000;

// Conecta ao MongoDB
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });




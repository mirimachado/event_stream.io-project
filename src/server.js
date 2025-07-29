const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const dotenv = require('dotenv');
const authRoutes = require('./authRoutes');
require('./passportConfig');

dotenv.config();

const app = express();
app.use(express.json());
app.use(passport.initialize());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB conectado');
}).catch(err => {
    console.error('Erro ao conectar no MongoDB:', err);
});

app.use('/api', authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

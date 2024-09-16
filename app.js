require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

// Rotas
app.get("/", (req, res) => {
    res.status(200).json({ msg: "Bem-vindo à API!" });
  });
  
// Conexão com o banco de dados
connectDB();

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

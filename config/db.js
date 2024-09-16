const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.folvv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
    console.log('Conectou ao banco!');
  } catch (err) {
    console.error('Erro ao conectar ao banco:', err);
  }
};

module.exports = connectDB;

const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');

// Registrar usuário
const registerUser = async (name, email, password) => {
  // Verifica se já existe
  const existingUser = await userModel.findByEmail(email);
  if (existingUser) {
    throw new Error('Usuário já existe');
  }

  // Criptografa senha
  const hashedPassword = await bcrypt.hash(password, 10);

  // Cria usuário
  const user = await userModel.createUser(name, email, hashedPassword);

  return user;
};

// Login
const loginUser = async (email, password) => {
  const user = await userModel.findByEmail(email);
  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  // Compara senha
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Senha inválida');
  }

  // Gera token
  const token = generateToken(user.id);

  return { user, token };
};

// Gerar token
const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    jwtConfig.secret,
    { expiresIn: jwtConfig.expiresIn }
  );
};

module.exports = {
  registerUser,
  loginUser,
};
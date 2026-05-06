const pool = require ('../database/connection')

const findByEmail = async (email) =>{
    const query = 'SELECT * FROM users WHERE email = $1'
    const result = await pool.query(query,[email])
    return result.rows[0]
}

const createUser = async (name, email, password) => {
  const query = `
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING id, name, email;
  `;

    const result = await pool.query(query,[name,email, password])
}

module.exports = {
    findByEmail,
    createUser,
}
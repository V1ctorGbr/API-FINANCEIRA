const authService = require('../services/authService')

exports.register = (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' })
    }

    if (name.length < 3) {
        return res.status(400).json({ message: "Nome deve ter no mínimo 3 caracteres" })
    }

    if (!email.includes("@")) {
        return res.status(400).json({ message: "Email inválido" })
    }

    if (password.length < 8) {
        return res.status(400).json({ message: "A senha deve conter no mínimo 8 caracteres" })
    }

    const user = authService.register(name, email, password)

    res.json(user)
}
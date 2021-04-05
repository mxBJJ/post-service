const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).send({ message: 'Nenhum token enviado.' })
    }

    const parts = authHeader.split(' ')

    if (parts.length < 2) {
        return res.status(401).send({ message: 'Verifique o formato - Bearer <token>.' })
    }

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ message: 'Verifique o formato - Bearer <token>.' })
    }

    jwt.verify(token, authConfig.secret, (error, decoded) => {
        if (error) return res.status(401).send({ error: 'Token inválido.' })

        req.userId = decoded.id

        return next()
    })
}
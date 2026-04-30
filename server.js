const http = require('http')

const host = 'localhost'
const port = 3000

const requestListener = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Servidor HTTP criado com sucesso')
}

const server = http.createServer(requestListener)

server.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}`)
})
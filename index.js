import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'

// Crear la app
const server = express()

// Habilitar Pug
server.set('view engine', 'pug')
server.set('views', './views')

// Carpeta Publica
server.use( express.static('public'))

//Routing
server.use('/auth', usuarioRoutes);

const port = 3000;

server.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});


const express = require('express'); 
const app = express(); 
const path = require('path'); 
// Sirve archivos estáticos desde la carpeta 'public' 
app.use(express.static('public')); 
// Ruta principal que entrega el HTML 
app.get('/', (req, res) => { 
res.sendFile(path.join(__dirname, '/public/index.html')); 
}); 
// Ejecuta el servidor en el puerto 3000 
const PORT = 3000; 
app.listen(PORT, () => { 
console.log(`Servidor corriendo en http://localhost:${PORT}`); 
});
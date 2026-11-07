const express = require('express');
const path = require('path');

const app = express();

const server = require('./server/server.js');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'src')));
app.set('views', path.join(__dirname, 'views')); 

app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.render('home');
});

   app.get('/simulation', (req, res) => {
     res.render('simulation', { title: 'VLE Simulation' });
   });

app.use(server);


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
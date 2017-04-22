const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const path        = require('path');
const mongoose    = require('mongoose');
const config      = require('./config');
const port        = config.port;


// DATABASE
// =======================================
mongoose.connect(config.database.src);
mongoose.connection.on('connected', () => {
  console.log('Connected to database');
});
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});


// MIDDLEWARES
// =======================================
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


// ROUTES
// =======================================
app.get('/test', (req, res) => {
  res.sendfile("./test.html");
});
app.get('/', (req,res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})


// START THE Server
// =======================================
app.listen(port, function() {
  console.log('Server started on port ' + port);
});
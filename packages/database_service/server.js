const server = require('express')();
const mongoose = require('mongoose');
const mailSchema = require('./dbUtil/Models/Mail');
mongoose.model('Mail', mailSchema);

const bodyParser = require('body-parser');
const getRoutes = require('./routes/get');
const postRoutes = require('./routes/post');
const { port } = require('./config');
const connection = require('./dbUtil');


server.use(bodyParser.json());

server.use(getRoutes);
server.use(postRoutes);


server.listen(port, () => {
  console.log('Database service running on port ' + port);
});



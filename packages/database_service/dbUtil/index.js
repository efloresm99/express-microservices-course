const mongoose = require('mongoose');
const { mongoURI } = require('./../config');

mongoose.connect(mongoURI);

module.exports = mongoose;
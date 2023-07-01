const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pollingapi');

const db = mongoose.connection;

db.on('error', console.error.bind(console,"ErroR in connection database"));

db.once('open', function(){
    console.log('Konnected to Database:: MongoDB')
});

console.log('mongoose configuration loaded');

module.exports = db;

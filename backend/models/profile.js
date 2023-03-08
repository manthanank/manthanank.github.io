const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create data schema & model
const DataSchema = new Schema({
    name: {
        type: String,
    }
});


const Data = mongoose.model('data',DataSchema);

module.exports = Data;
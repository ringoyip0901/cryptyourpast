const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const myURI = "mongodb://cryptyourpast:blockchain@ds239988.mlab.com:39988/cryptyourpast";

const URI = process.env.MONGO_URI || myURI;

mongoose.connect(myURI, {
  useMongoClient: true
});

mongoose.connection.once('open', () => {
  console.log('connected to MongoDB!')
})

var Chain = new Schema({
  item: String,
  created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Chain', Chain)
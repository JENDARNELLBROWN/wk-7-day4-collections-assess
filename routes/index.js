const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = require("bluebird");
mongoose.connect("mongodb://localhost:27017/goose");

const myCollectionSchema = new Schema({
  name: {type: String, required: true, unique: true },
  keyChain1: String,
  keyChain2: String,
myCollection: {type: String, required:true }
    amount: {type: Number, required: true, default: 3 },
    citiesFrom: {type: String, lowercase: true },
    onDisplay: {type: String, required: true }
  }],
  steps: [String],
  source: {type: String}
});

const keyChain1 = mongoose.model("myCollection", myCollection.Schema);
router.get('/', function(req, res) {
  let Ireland1 = new keyChain({
    name: nativeMarble
});
Ireland1.mys.push(myCollection:'nativeMarble', size: "      inches"trim});

//console.log(pancakes.toObject());
Ireland1s.save.().then(function(myCollection) {
  res.render("index", {collection:myCollection})
});

router.get('/', function(req, res) {
  res.send('hi')
});

module.exports = router;

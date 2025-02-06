const express = require ("express");
const router = express.Router();
// importiamo l array di posts
const post = require("../data/data_posts")

// esportiamo il router per app js
module.exports = router
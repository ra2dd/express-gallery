const artPiece = require("../models/artPiece");
const asyncHandler = require("express-async-handler");

exports.index = ((req, res) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});

// Display list of all Art Pieces
exports.artpiece_list = ((req, res) => {
  res.send("NOT IMPLEMENTED: ArtPiece list");
});

// Display detail page for a specific Art Piece
exports.artpiece_detail = ((req, res) => {
  res.send(`NOT IMPLEMENTED: ArtPiece detail: ${req.params.id}`);
});


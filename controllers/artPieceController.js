const ArtPiece = require("../models/artPiece");
const asyncHandler = require("express-async-handler");

// exports.index = ((req, res) => {
//   res.send("NOT IMPLEMENTED: Site Home Page");
// });

// Display list of all Art Pieces
exports.artpiece_list = asyncHandler(async (req, res, next) => {
  const allArtPieces = await ArtPiece.find({}, "title artist")
    .sort({ title: 1})
    .exec();

  res.render(
    "artpiece_list", 
    { 
      title: "Art Piece List",
      artpiece_list: allArtPieces,
    });
});

// Display detail page for a specific Art Piece
exports.artpiece_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: ArtPiece detail: ${req.params.id}`);
});


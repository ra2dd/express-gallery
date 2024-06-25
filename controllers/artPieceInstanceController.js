const ArtPieceInstance = require("../models/artPieceInstance");
const asyncHandler = require("express-async-handler");

// Display list of all ArtPieceInstances
exports.artpieceinstance_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ArtPieceInstance list");
});

// Display detail page for a specific ArtPieceInstance
exports.artpieceinstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: ArtPieceInstance detail: ${req.params.id}`);
});

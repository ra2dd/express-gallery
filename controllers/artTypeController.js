const ArtType = require("../models/artType");
const asyncHandler = require("express-async-handler");

// Display list of all ArtType
exports.arttype_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ArtType list");
});

// Display detail page for a specific ArtType
exports.arttype_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: ArtType detail: ${req.params.id}`);
});
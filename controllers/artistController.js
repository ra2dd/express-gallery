const Artist = require("../models/artist");
const asyncHandler = require("express-async-handler");

// Display the list of all Artists
exports.artist_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Artist list");
});

// Display detail page for a specific Artist.
exports.artist_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Artist detail: ${req.params.id}`);
});
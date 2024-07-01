const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArtPieceSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: Schema.Types.ObjectId, ref: "Artist", required: true },
  description: { type: String, required: true },
  yearCreated: { type: Number, required: true },
  artType: [{ type: Schema.Types.ObjectId, ref: "ArtType" }],
  image: { type: String },
});

// Virtual for art piece's URL
ArtPieceSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/art/${this._id}`;
});

// Export Model
module.exports = mongoose.model("ArtPiece", ArtPieceSchema)
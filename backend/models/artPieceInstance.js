const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArtPieceInstanceSchema = new Schema({
  // reference to the associated art piece
  artPiece: {
    type: Schema.Types.ObjectId,
    ref: "ArtPiece",
    required: true
  },
  serialNumber: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ["In Gallery", "Maintenance", "Unavailable"],
    default: "Maintenance",
  },
});

// Virtual for art piece instance's URL
ArtPieceInstanceSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/art/${this.artPiece}/instance/${this._id}`;
});

// Export model
module.exports = mongoose.model("ArtPieceInstance", ArtPieceInstanceSchema);
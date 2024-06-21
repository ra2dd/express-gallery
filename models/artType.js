const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArtTypeSchema = new Schema({
  name: { type: String, required: true , minLength: 3, maxLength: 100 },
});

// Virtual for art type's URL
ArtTypeSchema.virtual("url").get(function () {
  return `/type/${this._id}`;
});

// export model
module.exports = mongoose.model("ArtType", ArtTypeSchema);
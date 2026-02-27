const mongoose = require("mongoose");

const ExtensionSchema = new mongoose.Schema(
  {
    extension: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Extension", ExtensionSchema);
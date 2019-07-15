const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: String,
    coverImages: [{ type: String }],
    // contentImages: [{ type: String }],
    highLight: String,
    text: String
    // type: { type: Schema.Types.ObjectId, ref: "Type" }
  },
  { timestamps: { createdAt: "created_at" } }
);

const articleModel = mongoose.model("Article", articleSchema);

module.exports = articleModel;

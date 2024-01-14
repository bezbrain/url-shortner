const { model, Schema } = require("mongoose");
const nanoId = require("nanoid");

const LinkSchema = new Schema(
  {
    originalUrl: {
      type: String,
      required: [true, "Please provide original url"],
    },
    shortUrl: {
      type: String,
      unique: true,
    },
    fullUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

LinkSchema.pre("save", function () {
  this.shortUrl = nanoId.nanoid(7);
  this.fullUrl = `https://url-01fx.onrender.com/${this.shortUrl}`;
});

module.exports = model("Links", LinkSchema);

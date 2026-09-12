const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: 2,
    maxlength: 40,
  },
  contactEmail: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  establishedYear: {
    type: Number,
    min: 1900,
    max: 2026,
  },
  industryType: {
    type: String,
    enum: {
      values: ["Tech", "Software", "Hardware", "IT"],
      message: "Industry must be Tech, Software, Hardware, or IT",
    },
    required: true,
  },
  officeLocation: {
    type: String,
    maxlength: 60,
  }
}, { timestamps: true });

const companyModel = mongoose.model("companies", companySchema);

module.exports = { companyModel };

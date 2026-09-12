const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 40,
    minlength: 2,
  },
  contactEmail: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (val) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val);
      },
      message: "please enter a valid company email",
    },
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
      message: "industry must be Tech, Software, Hardware, or IT",
    },
    required: true,
  },
  officeLocation: {
    type: String,
    maxlength: 60,
  },
}, { timestamps: true });

const companyModel = mongoose.model("companies", companySchema);

module.exports = { companyModel };

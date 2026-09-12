const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  skillName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxlength: 30,
  },
  proficiencyLevel: {
    type: String,
    enum: {
      values: ["Beginner", "Intermediate", "Advanced", "Expert"],
      message: "level must be Beginner, Intermediate, Advanced, or Expert",
    },
    required: true,
  },
  category: {
    type: String,
    required: true,
    maxlength: 40,
  },
  description: {
    type: String,
    maxlength: 150,
  }
}, { timestamps: true });

const skillModel = mongoose.model("skills", skillSchema);

module.exports = { skillModel };

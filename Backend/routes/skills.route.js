const express = require("express");
const skillRouter = express.Router();
const { 
  getSkills, 
  addSkill, 
  updateSkill, 
  deleteSkill 
} = require("../controller/skills.controller.js");

skillRouter.get("/", getSkills);
skillRouter.post("/", addSkill);
skillRouter.put("/:id", updateSkill);
skillRouter.delete("/:id", deleteSkill);

module.exports = { skillRouter };

   : const Skill = require("../models/skill.model");  
async function getAllSkills() {
  // logic to fetch skills from database
  // return await Skill.find();
}

async function createSkill(skillData) {
  // logic to save a new skill
  // return await Skill.create(skillData);
}

module.exports = { 
  getAllSkills, 
  createSkill 
};

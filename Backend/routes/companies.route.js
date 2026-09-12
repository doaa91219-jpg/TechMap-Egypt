 const express = require("express");
const companyRouter = express.Router();
const { 
  getCompanies, 
  addCompany, 
  updateCompany, 
  deleteCompany 
} = require("../controller/companies.controller.js");

companyRouter.get("/", getCompanies);
companyRouter.post("/", addCompany);
companyRouter.put("/:id", updateCompany);
companyRouter.delete("/:id", deleteCompany);

module.exports = { companyRouter };

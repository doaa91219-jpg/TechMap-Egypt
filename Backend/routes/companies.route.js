const express = require("express");
const companyRouter = express.Router();
const { getCompanies, addCompany } = require("../controller/companies.controller.js");

// -- CRUD OPERATION -- >> get, post
companyRouter.get("/", getCompanies);
companyRouter.post("/", addCompany);

// companyRouter.put("/:id", updateCompany);
// companyRouter.delete("/:id", deleteCompany);

module.exports = { companyRouter };

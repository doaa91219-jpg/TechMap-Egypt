const { companyModel } = require("../models/companies.model.js");

const getCompanies = (req, res) => {
  companyModel
    .find()
    .then((data) => {
      console.log("data", data);
      res.json({ message: "companies fetched successfully", data: data });
    })
    .catch((err) => {
      console.log("error when fetching companies", err);
      res.json({ message: "error occurred while fetching companies", err: err });
    });
};

const addCompany = (req, res) => {
  console.log("body", req.body);
  companyModel
    .create(req.body)
    .then(() => {
      res.json({ message: "company added successfully" });
    })
    .catch((err) => {
      console.log("error when adding company", err);
      res.json({ message: "error occurred while adding company", err: err });
    });
};

module.exports = { getCompanies, addCompany };

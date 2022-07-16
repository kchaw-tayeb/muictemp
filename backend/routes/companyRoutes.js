import express from "express";
import Company from "../models/companyModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router();
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const companies = await Company.find({});
    res.json(companies);
  })
);
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { name, adresse, phone, tva } = req.body;
    console.log(req.body);
    const company = await Company.create({
      name,
      adresse,
      phone,
      tva,
    });

    if (company) {
      res.status(201).json({
        _id: company._id,
        name: company.name,
        adresse: company.adresse,
        phone: company.phone,
        tva: company.tva,
      });
    } else {
      res.status(400);
      throw new Error("Invalid company data");
    }
  })
);
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const companie = await Company.findById(req.params.id);
    if (companie) {
      res.json(companie);
    } else {
      res.status(404).json({ message: "companie not found" });
    }
  })
);
// get an element
router.get(
  "/companie/:id",
  asyncHandler(async (req, res) => {
    const company = await Company.findById(req.params.id);

    if (company) {
      res.status(201).json({
        _id: company._id,
        name: company.name,
        adresse: company.adresse,
        phone: company.phone,
        tva: company.tva,
      });
    } else {
      res.status(400);
      throw new Error("Invalid company data");
    }
  })
);
// update an element
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const company = await Company.findById(req.params.id);

    if (company) {
      company.name = req.body.name || company.name;
      company.adresse = req.body.adresse || company.adresse;
      company.phone = req.body.phone || company.phone;
      company.tva = req.body.tva || company.tva;
      const updateCompany = await company.save();
      res.status(201).json({
        _id: company._id,
        name: company.name,
        adresse: company.adresse,
        phone: company.phone,
        tva: company.tva,
      });
    } else {
      res.status(400);
      throw new Error("Invalid company data");
    }
  })
);
//   delete an company
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const companie = await Company.findById(req.params.id);
    if (companie) {
      await companie.remove();
      res.json({ company: "User removed" });
    } else {
      res.status(404).json({ message: "companie not found" });
    }
  })
);
export default router;

import express from "express";
import Employer from "../models/employerModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router();
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const employers = await Employer.find({});
    res.json(employers);
  })
);
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { firstName, secondName, phone, company } = req.body;
    console.log(req.body);
    const employer = await Employer.create({
      firstName,
      secondName,
      phone,
      company,
    });

    if (employer) {
      res.status(201).json({
        _id: employer._id,
        firstName: employer.name,
        secondName: employer.secondName,
        phone: employer.phone,
        company: employer.company,
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
    const employer = await Employer.findById(req.params.id);
    if (employer) {
      res.json(employer);
    } else {
      res.status(404).json({ message: "employer not found" });
    }
  })
);
// get an element
router.get(
  "/employer/:id",
  asyncHandler(async (req, res) => {
    const employer = await Employer.findById(req.params.id);

    if (employer) {
      res.status(201).json({
        _id: employer._id,
        firstName: employer.firstName,
        secondName: employer.secondName,
        phone: employer.phone,
        company: employer.company,
      });
    } else {
      res.status(400);
      throw new Error("Invalid employer data");
    }
  })
);
// update an element
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const employer = await Employer.findById(req.params.id);

    if (employer) {
      employer.firstName = req.body.firstName || employer.firstName;
      employer.secondName = req.body.secondName || employer.secondName;
      employer.phone = req.body.phone || employer.phone;
      employer.company = req.body.company || employer.company;
      const updateEmployer = await employer.save();
      res.status(201).json({
        _id: employer._id,
        firstName: employer.firstName,
        secondName: employer.secondName,
        phone: employer.phone,
        company: employer.company,
      });
    } else {
      res.status(400);
      throw new Error("Invalid employer data");
    }
  })
);
//   delete an company
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const employer = await Employer.findById(req.params.id);
    if (employer) {
      await employer.remove();
      res.json({ company: "Employer removed" });
    } else {
      res.status(404).json({ message: "employer not found" });
    }
  })
);
export default router;

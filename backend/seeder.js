import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import companys from "./data/companys.js";
import Company from "./models/companyModel.js";
import Employer from "./models/employerModel.js";
import connectDB from "./config/db.js";
import employers from "./data/employers.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Company.deleteMany();
    await Employer.deleteMany();
    const createdCompanies = await Company.insertMany(companys);
    const companyOne = createdCompanies[0]._id;
    const companieEmployer = employers.map((employer) => {
      return { ...employer, company: companyOne };
    });
    await Employer.insertMany(companieEmployer);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Company.deleteMany();
    await Employer.deleteMany();
    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

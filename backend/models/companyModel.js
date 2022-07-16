import mongoose from "mongoose";

const companySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    adresse: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    tva: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);
export default Company;

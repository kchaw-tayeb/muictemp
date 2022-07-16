import mongoose from "mongoose";

const employerSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    secondName: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Company",
    },
  },
  {
    timestamps: true,
  }
);

const Employer = mongoose.model("Employer", employerSchema);

export default Employer;

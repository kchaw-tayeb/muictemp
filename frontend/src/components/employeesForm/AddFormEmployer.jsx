import React from "react";
import Title from "../utils/Title";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SaveIcon from "@material-ui/icons/Save";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dropdown from "../utils/Dropdown";
import DropdownCompanies from "../employeesForm/DropdownCompanies";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "50%",
      margin: theme.spacing(0.5),
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));
function AddForm({ hidePopup, id }) {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState(0);
  const [company, setCompany] = useState(id);
  const [data, setData] = useState(null);
  const classes = useStyles();
  const navigate = useNavigate();
  const handleSubmit = () => {
    const data = {
      firstName: firstName,
      secondName: secondName,
      phone: phone,
      company: company,
    };
    console.log(firstName);
    axios
      .post("/api/employees", data)

      .then((res) => {
        setData(res.data);
        setFirstName("");
        setSecondName("");
        setPhone(0);
        setCompany("");
        // navigate("/");
        // history.push("/");
        hidePopup();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Title>Add a new Employee</Title>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Second Name"
          variant="outlined"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {/* <TextField
          id="outlined-basic"
          label="Company"
          variant="outlined"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        /> */}
        {/* <DropdownCompanies setCompany={setCompany} /> */}
      </form>
      {/* <Link to="/">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <ArrowBackIcon />
        </IconButton>
      </Link> */}
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        type="submit"
        onClick={handleSubmit}
      >
        <SaveIcon />
      </IconButton>
    </div>
  );
}

export default AddForm;

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
function EditForm({ hidePopup, setEditEmployer, row }) {
  const id = row._id;
  //   const id = "6203de5be539b52eb4f76510 ";
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState(0);
  const [company, setCompany] = useState("");
  const [data, setData] = useState(null);
  const classes = useStyles();
  const navigate = useNavigate();
  //  ************************
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `/api/employees/employer/${id}`
        );
        // setCompanies(response);
        console.log(data);
        setFirstName(response.firstName);
        setSecondName(response.secondName);
        setPhone(response.phone);
        setCompany(response.company);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  /************************** */
  const handleSubmit = () => {
    const data = {
      firstName: firstName,
      secondName: secondName,
      phone: phone,
      company: company,
    };
    console.log(data);
    axios
      .put(`/api/employees/${id}`, data)

      .then((res) => {
        setData(res.data);
        setFirstName("");
        setSecondName("");
        setPhone(0);
        setCompany("");
        // navigate("/");
        // history.push("/");
        hidePopup();
        setEditEmployer(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <Title>Edit a Employee</Title>
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

export default EditForm;

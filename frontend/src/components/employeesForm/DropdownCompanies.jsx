import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../utils/Dropdown";

function DropdownCompanies({ setCompany }) {
  const [companies, setCompanies] = useState([]);
  //   const [deleteI, setDeleteI] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get("/api/companies");
        setCompanies(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  var currencies = [];
  currencies = companies.map((company) => {
    return { value: company._id, label: company.name };
  });
  console.log(currencies);

  return (
    <div>
      <Dropdown currencies={currencies} setCompany={setCompany} />
    </div>
  );
}

export default DropdownCompanies;

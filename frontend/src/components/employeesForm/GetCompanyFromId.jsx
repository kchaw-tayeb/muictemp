import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";

function GetCompanyFromId({ id }) {
  const [companies, setCompanies] = useState([]);
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

  const company = companies.find((c) => c._id === id);
  if (company) {
    const name = company.name;
    return <div>{name}</div>;
  }
  //   return <div>{company.name}</div>;
  return <div>Company</div>;
}

export default GetCompanyFromId;

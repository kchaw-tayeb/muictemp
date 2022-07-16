import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCompanies } from "../actions/companyActions";
function CrudCompanies() {
  const dispatch = useDispatch();
  const companyList = useSelector((state) => state.companyList);
  const { loading, error, companies } = companyList;
  useEffect(() => {
    dispatch(listCompanies());
  }, [dispatch]);

  return <div>CrudCompanies</div>;
}

export default CrudCompanies;

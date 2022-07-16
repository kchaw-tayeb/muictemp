import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listEmployees } from "../actions/employeeActions";
function CrudEmployees() {
  const dispatch = useDispatch();
  const employeeList = useSelector((state) => state.employeeList);
  const { loading, error, employees } = employeeList;
  useEffect(() => {
    dispatch(listEmployees());
  }, [dispatch]);
  return <div>CrudEmployees</div>;
}

export default CrudEmployees;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function EditButton({ row }) {
  const navigate = useNavigate();
  const handlePush = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="span"
      onClick={() => handlePush(row._id)}
    >
      <EditIcon />
    </IconButton>
  );
}

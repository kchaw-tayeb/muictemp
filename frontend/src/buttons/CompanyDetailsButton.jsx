import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function DetailsButton({ row }) {
  const navigate = useNavigate();
  const handlePush = (id) => {
    navigate(`/company/${row._id}`);
  };

  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="span"
      onClick={() => handlePush()}
    >
      <ZoomInIcon />
    </IconButton>
  );
}

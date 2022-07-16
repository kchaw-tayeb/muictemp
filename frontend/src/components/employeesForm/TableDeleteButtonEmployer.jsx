import React from "react";
import ConfirmDialog from "../utils/ConfirmDialog";
import { useState, useEffect } from "react";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function TableDeleteButtonEmployer({ row, setDeleteIE }) {
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const handleDelete = (id) => {
    setConfirmDialog({
      isOpen: true,
      title: "are you sure to delete this",
      subTitle: "you can't udo this operation",
      onConfirm: () => {
        setConfirmDialog({
          ...confirmDialog,
          isOpen: false,
        });
        axios
          .delete(`/api/employees/${id}`)

          // .delete("/api/companies/6200b641479c02277c371b3b")
          .then(setDeleteIE(true))
          .catch((error) => {
            console.error("There was an error!", error);
          });
      },
    });
  };

  return (
    <>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        // onClick={handleDelete}
        onClick={() => handleDelete(row._id)}
      >
        <DeleteForeverIcon />
      </IconButton>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
}
export default TableDeleteButtonEmployer;

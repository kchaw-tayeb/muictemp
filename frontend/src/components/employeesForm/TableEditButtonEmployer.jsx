import React from "react";
import Popup from "../utils/Popup";
import EditFormEmployer from "../employeesForm/EditFormEmployer";
import { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

function TableEditButtonEmployer({ setEditEmployer, row }) {
  const [openPopup, setOpenPopup] = useState(false);
  const hidePopup = () => {
    setOpenPopup(false);
  };

  return (
    <>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        onClick={() => setOpenPopup(true)}
      >
        <EditIcon />
      </IconButton>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <EditFormEmployer
          hidePopup={hidePopup}
          setEditEmployer={setEditEmployer}
          row={row}
        />
      </Popup>
    </>
  );
}

export default TableEditButtonEmployer;

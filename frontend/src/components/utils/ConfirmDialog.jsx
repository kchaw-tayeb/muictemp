import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import React from "react";

function ConfirmDialog(props) {
  const { confirmDialog, setConfirmDialog } = props;
  return (
    <Dialog open={confirmDialog.isOpen}>
      <DialogTitle>
        <Typography component="span" variant="h6">
          {confirmDialog.title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography component="span" variant="body2">
          {confirmDialog.subTitle}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={confirmDialog.onConfirm}
        >
          Yes
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;

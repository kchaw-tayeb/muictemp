import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles({
  root: {
    width: "50%",
    padding: "40px",
  },
});

function DetailsCompnay({ company }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className={classes.root}>
      <p>Name : ......................{company.name}</p>
      <br />
      <p>Phone : ...........{company.phone}</p>
      <br />
      <p>Adresse : ...................{company.adresse}</p>
      <br />
      <p>Tva : .............................. {company.tva}</p>
    </div>
  );
}

export default DetailsCompnay;

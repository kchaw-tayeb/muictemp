import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCompanyDetails } from "../actions/companyActions";
import { useParams } from "react-router-dom";
import DetailsCompnay from "../components/DetailsCompnay";
// ***************************
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Temployers from "../components/Temployees";
import { Container, Paper } from "@material-ui/core";
import PageHeader from "../components/PageHeader";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
// ****************************
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container>
          <Box>{children}</Box>
        </Container>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function CompanyDetail() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const companyDetails = useSelector((state) => state.companyDetails);
  const { company } = companyDetails;

  useEffect(() => {
    dispatch(listCompanyDetails(id));
  }, [dispatch]);

  return (
    <>
      <PageHeader
        title="Company"
        subTitle="company details"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper square>
        <div className={classes.root}>
          <AppBar position="static" color="transparent">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="company details" {...a11yProps(0)} />
              <Tab label="employees" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <DetailsCompnay company={company} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Temployers id={id} />
          </TabPanel>
        </div>
      </Paper>
    </>
  );
}

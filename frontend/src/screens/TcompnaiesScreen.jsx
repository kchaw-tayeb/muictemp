import React from "react";
import { Link } from "react-router-dom";
// import Link from "@material-ui/core/Link";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Title from "./Title";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { EditButton } from "../buttons/CompnayEditButton";
import { useDispatch, useSelector } from "react-redux";
import { listCompanies } from "../actions/companyActions";
import CompanyDeleteButton from "../buttons/CompanyDeleteButton";
import CompanyDetails from "./CompanyDetails";
import { DetailsButton } from "../buttons/CompanyDetailsButton";
import PageHeader from "../components/PageHeader";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import { Paper, makeStyles, Toolbar, InputAdornment } from "@material-ui/core";
import useTable from "../../src/components/utils/useTable";
import Controls from "../../src/components/controls/Controls";
import { Search } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: "none",
  },
}));

const headCells = [
  { id: "name", label: "Companies" },
  { id: "adresse", label: "Adresse" },
  { id: "phone", label: "Pohne" },
  { id: "tva", label: "Tva" },
  { id: "action", label: "Actions", disableSorting: true },
];
function TcompnaiesScreen() {
  const [deleteI, setDeleteI] = useState(false);
  const dispatch = useDispatch();
  const companyList = useSelector((state) => state.companyList);
  const { loading, error, companies } = companyList;
  useEffect(() => {
    dispatch(listCompanies());
  }, [dispatch]);
  const classes = useStyles();
  // **********************
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(companies, headCells, filterFn);
  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.name.toLowerCase().includes(target.value)
          );
      },
    });
  };

  // **************************
  return (
    <React.Fragment>
      {/* <Title>Companies</Title> */}
      <PageHeader
        title="Companies"
        subTitle="companies list"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label="Search Companies"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
        </Toolbar>
        <Table size="small">
          {/* <TableHead>
            <TableRow>
              <TableCell>Companies</TableCell>
              <TableCell>Adresse</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Tva</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead> */}
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.adresse}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.tva}</TableCell>
                <TableCell align="right">
                  <EditButton row={row} />
                  <CompanyDeleteButton row={row} setDeleteI={setDeleteI} />
                  <DetailsButton row={row} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TblPagination />
      </Paper>
      <Link to="/add">
        <Button
          variant="contained"
          color="primary"
          size="large"
          classes={{ root: classes.root, label: classes.label }}
        >
          new company
        </Button>
      </Link>
    </React.Fragment>
  );
}

export default TcompnaiesScreen;

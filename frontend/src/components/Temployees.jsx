import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Popup from "../components/utils/Popup";
import { useState, useEffect } from "react";
import AddFormEmployer from "../components/employeesForm/AddFormEmployer";
import EditFormEmployer from "../components/employeesForm/EditFormEmployer";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "../components/utils/Title";
import axios from "axios";

import TableEditButtonEmployer from "../components/employeesForm/TableEditButtonEmployer";
import TableDeleteButtonEmployer from "../components/employeesForm/TableDeleteButtonEmployer";
import GetCompanyFromId from "../components/employeesForm/GetCompanyFromId";

import { Paper, makeStyles, Toolbar, InputAdornment } from "@material-ui/core";
import useTable from "../../src/components/utils/useTable";
import Controls from "../../src/components/controls/Controls";
import { Search } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "50%",
      margin: theme.spacing(1),
    },
  },
}));

const headCells = [
  { id: "firstName", label: "First Name" },
  { id: "secondName", label: "Second Name" },
  { id: "phone", label: "Phone" },
  { id: "company", label: "Company" },
  { id: "action", label: "Actions", disableSorting: true },
];
function Temployers({ id }) {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);
  const hidePopup = () => {
    setOpenPopup(false);
  };
  // ********************

  const [employers, setEmployers] = useState([]);
  const [deleteIE, setDeleteIE] = useState(false);
  const [editEmployer, setEditEmployer] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get("/api/employees");
        setEmployers(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [openPopup, editEmployer, deleteIE]);
  // }, [deleteIE]);
  const employees = employers.filter((employee) => employee.company === id);
  // *************************
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(employees, headCells, filterFn);
  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.firstName.toLowerCase().includes(target.value)
          );
      },
    });
  };
  // ************************
  return (
    <>
      <div>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={() => setOpenPopup(true)}
        >
          <AddCircleIcon />
        </IconButton>
      </div>

      <React.Fragment>
        <Title>Employees</Title>
        <Toolbar>
          <Controls.Input
            label="Search Employees"
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
              <TableCell>First Name</TableCell>
              <TableCell>Second Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Company</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead> */}
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.secondName}</TableCell>
                <TableCell>{row.phone}</TableCell>
                {/* <TableCell>{row.company}</TableCell> */}
                <TableCell>
                  <GetCompanyFromId id={row.company} />
                </TableCell>
                <TableCell align="right">
                  {/* <TableEditButton row={row} /> */}
                  {/* <TableDeleteButton row={row} setDeleteI={} /> */}
                  {/* <TableDeleteButton row={row} setDeleteI={setDeleteI} /> */}
                  <TableDeleteButtonEmployer
                    row={row}
                    setDeleteIE={setDeleteIE}
                    id={id}
                  />
                  <TableEditButtonEmployer
                    row={row}
                    setEditEmployer={setEditEmployer}
                    id={id}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TblPagination />
      </React.Fragment>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <AddFormEmployer hidePopup={hidePopup} id={id} />
      </Popup>
    </>
  );
}

export default Temployers;

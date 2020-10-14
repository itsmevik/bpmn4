import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const columns = [
  { id: "name", label: "Email", minWidth: 100 },
  { id: "email", label: "Name", minWidth: 200 },
  { id: "status", label: "Status", minWidth: 100 },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    minWidth: 100,
  },
}));

export default function UsersList(props) {
  //console.log(props.Item.map((row) => row.email).slice(0, 2));
  //const js = JSON.stringify(val);
  //const rows = { js };
  // console.log(props.Item.map((row) => (row.is_admin == 0 ? "user" : "admin")));
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleClick = (value, user_id) => {
    console.log(value, user_id);
    props.onUpdate(value, user_id);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // const handleDelete = (e, index) => {
  //   console.log(index);
  //   props.onDelete();
  // };
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontSize: 20,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.Item.map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  <TableCell align="left" size="small">
                    <IconButton
                      style={{ width: 40, height: 40, marginRight: 20 }}
                      onClick={() => props.onDelete(row.user_id)}
                    >
                      <DeleteIcon></DeleteIcon>
                    </IconButton>

                    {row.email ? row.email : ""}
                  </TableCell>
                  <TableCell align="left" size="small">
                    {row.name ? row.name : "Pending"}
                  </TableCell>
                  <TableCell align="left" size="small">
                    <FormControl>
                      <NativeSelect
                        defaultValue={row.is_admin}
                        inputProps={{
                          name: "name",
                          id: row.id,
                        }}
                      >
                        <option value={0}>{"User"}</option>
                        <option value={1}>{"Admin"}</option>
                      </NativeSelect>
                    </FormControl>

                    <Button
                      color="primary"
                      variant="contained"
                      size="small"
                      style={{ marginLeft: 50 }}
                      onClick={() => {
                        let value = document.getElementById(row.id).value;
                        handleClick(value, row.user_id);
                      }}
                    >
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              );
            }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={props.Item.map((row) => row.email).length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

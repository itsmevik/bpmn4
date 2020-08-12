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
const columns = [{ id: "flow", label: "Flows", minWidth: 100 }];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function UsersList(props) {
  //console.log(props.Item.map((row) => row.email).slice(0, 2));
  //const js = JSON.stringify(val);
  //const rows = { js };
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = (index) => {
    console.log(index);
  };
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
                    fontSize: 40,
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
                <TableRow
                  hover
                  role="default"
                  tabIndex={-1}
                  key={row.code}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell
                    align="left"
                    size="medium"
                    style={{ fontSize: 15 }}
                    onClick={() => props.onFlowClick(row.f_id)}
                  >
                    {row.name ? row.name : ""}
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
        count={props.Item.map((row) => row.name).length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

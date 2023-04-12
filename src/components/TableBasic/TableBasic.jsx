import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export default function TableBasic(props) {
  const {
    title,
    datas,
    columns,
    fetchDataTable,
    totalData,
    showAction = false,
    hanldeEditRow,
    hanldeDeleteRow,
  } = props;
  //
  const styles = useStyles();
  //
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    fetchDataTable({ page, rowsPerPage });
  };
  useEffect(() => {
    fetchDataTable({ page, rowsPerPage });
  }, [page, rowsPerPage]);
  return (
    <Paper className={styles.TableBasic}>
      <Box height={70}>
        <Typography
          paddingLeft={2}
          paddingTop={2}
          variant="h5"
          sx={{ fontWeight: "bold" }}
        >
          {title}{" "}
        </Typography>
      </Box>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              {showAction ? (
                <TableCell
                  align={"center"}
                  style={{
                    minWidth: 100,
                  }}
                >
                  Hành động
                </TableCell>
              ) : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {datas
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    {showAction ? (
                      <TableCell align="center">
                        <IconButton
                          variant="contained"
                          onClick={() => {
                            hanldeEditRow(row);
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          variant="contained"
                          onClick={() => {
                            hanldeDeleteRow(row);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    ) : null}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        labelRowsPerPage={"Hàng trên mỗi trang:"}
        labelDisplayedRows={({ from, to, count }) => {
          return `${from}–${to} của ${
            count !== -1 ? count : `nhiều hơn ${to}`
          }`;
        }}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={totalData ? totalData : datas.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

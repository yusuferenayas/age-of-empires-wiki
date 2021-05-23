import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableCellProps,
  Box,
} from "@material-ui/core";
import {useSelector} from "react-redux";
import {storeUnits} from "Stores/App";

const columns = ["ID", "Name", "Age", "Costs"];

const UnitsTable = () => {
  const units = useSelector(storeUnits);
  const tableCellProps: TableCellProps = {align: "left"};
  console.log(units);
  return (
    <div id="unitsTable">
      <Box paddingTop={3}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell {...tableCellProps} key={index}>
                    <b>{column}</b>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {units &&
                units.length > 0 &&
                units.map((unit, index) => (
                  <TableRow
                    key={index}
                    hover
                    onClick={() => console.log("show unit detail")}
                  >
                    <TableCell component="th" scope="row">
                      {unit.id}
                    </TableCell>
                    <TableCell {...tableCellProps}>{unit.name}</TableCell>
                    <TableCell {...tableCellProps}>{unit.age}</TableCell>
                    <TableCell {...tableCellProps}>
                      {unit.cost?.Food ? " Food: " + unit.cost?.Food : ""}
                      {unit.cost?.Gold ? " Gold: " + unit.cost?.Gold : ""}
                      {unit.cost?.Wood ? " Wood: " + unit.cost?.Wood : ""}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default UnitsTable;

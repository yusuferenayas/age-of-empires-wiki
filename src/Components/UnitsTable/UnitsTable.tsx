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
import {tableColumns} from "Config";
import {useUnitsFilters} from "Hooks";

const UnitsTable = () => {
  const tableCellProps: TableCellProps = {align: "left"};
  const unitsToShow = useUnitsFilters();

  return (
    <div id="unitsTable">
      <Box paddingTop={3} paddingBottom={6}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {tableColumns.map((column, index) => (
                  <TableCell {...tableCellProps} key={index}>
                    <b>{column}</b>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {unitsToShow.map((unit, index) => (
                <TableRow
                  key={index}
                  hover
                  onClick={() => console.log("show unit detail")}
                >
                  <TableCell component="th" scope="row" width="10%">
                    {unit.id}
                  </TableCell>
                  <TableCell {...tableCellProps} width="30%">
                    {unit.name}
                  </TableCell>
                  <TableCell {...tableCellProps} width="30%">
                    {unit.age}
                  </TableCell>
                  <TableCell {...tableCellProps} width="30%">
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

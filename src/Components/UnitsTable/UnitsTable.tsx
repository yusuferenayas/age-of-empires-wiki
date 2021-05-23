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
import {routePath} from "Navigator/routes";
import {useHistory} from "react-router-dom";

const UnitsTable = () => {
  const history = useHistory();
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
              {unitsToShow.map(({id, name, age, cost}, index) => (
                <TableRow
                  key={index}
                  hover
                  onClick={() => history.push(routePath.unitDetails, {id})}
                >
                  <TableCell component="th" scope="row" width="10%">
                    {id}
                  </TableCell>
                  <TableCell {...tableCellProps} width="30%">
                    {name}
                  </TableCell>
                  <TableCell {...tableCellProps} width="30%">
                    {age}
                  </TableCell>
                  <TableCell {...tableCellProps} width="30%">
                    {cost?.Food ? " Food: " + cost?.Food : ""}
                    {cost?.Gold ? " Gold: " + cost?.Gold : ""}
                    {cost?.Wood ? " Wood: " + cost?.Wood : ""}
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

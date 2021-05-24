import {Container, Typography, Box} from "@material-ui/core";
import {AgesFilter, CostsFilter, UnitsTable} from "Components";

const Units = () => {
  return (
    <div id="units">
      <Container>
        <Typography variant="h5" gutterBottom color="primary">
          Ages
        </Typography>
        <AgesFilter />
        <Box paddingBottom={4}>
          <Typography variant="h5" gutterBottom color="primary">
            Costs
          </Typography>
        </Box>
        <CostsFilter label="food" />
        <CostsFilter label="gold" />
        <CostsFilter label="wood" />
        <Typography variant="h5" gutterBottom color="primary">
          Units
        </Typography>
        <UnitsTable />
      </Container>
    </div>
  );
};

export default Units;

import "./Units.scss";
import {Container, Typography} from "@material-ui/core";
import {AgesFilter, CostsFilter, UnitsTable} from "Components";

const Units = () => {
  return (
    <div id="units">
      <Container>
        <Typography variant="h5" gutterBottom color="primary">
          Ages
        </Typography>
        <AgesFilter />
        <Typography variant="h5" gutterBottom color="primary">
          Costs
        </Typography>
        <CostsFilter />
        <Typography variant="h5" gutterBottom color="primary">
          Units
        </Typography>
        <UnitsTable />
      </Container>
    </div>
  );
};

export default Units;

import {Typography} from "@material-ui/core";
import {FC} from "react";
import {RouteComponentProps, StaticContext} from "react-router";

type UnitDetailsParams = {
  id: string;
};

type UnitDetailsProps = RouteComponentProps<
  {},
  StaticContext,
  UnitDetailsParams
>;

const UnitDetails: FC<UnitDetailsProps> = ({location: {state}}) => {
  const unitID = state?.id;

  if (!unitID) {
    return (
      <Typography variant="body1" gutterBottom color="secondary" align="center">
        Please choose unit from Units Page.
      </Typography>
    );
  }

  return <div>UnitDetails</div>;
};

export default UnitDetails;

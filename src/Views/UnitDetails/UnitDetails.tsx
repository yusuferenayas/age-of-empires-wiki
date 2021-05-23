import {Container, List, ListItem, Typography} from "@material-ui/core";
import {UnitModel} from "Models";
import {FC} from "react";
import {useSelector} from "react-redux";
import {RouteComponentProps, StaticContext} from "react-router";
import {RootState} from "Stores";
import {storeSelectedUnits} from "Stores/App";

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
  const selectedUnit = useSelector<RootState, UnitModel | null | undefined>(
    (state) => (unitID ? storeSelectedUnits(state, Number(unitID)) : null)
  );

  if (!selectedUnit) {
    return (
      <Typography variant="body1" gutterBottom color="secondary" align="center">
        Please choose unit from Units Page.
      </Typography>
    );
  }

  const {
    id,
    name,
    description,
    age,
    cost,
    build_time,
    reload_time,
    hit_points,
    attack,
    accuracy,
  } = selectedUnit;

  return (
    <Container>
      <List>
        <ListItem>ID: {id}</ListItem>
        <ListItem>Name: {name}</ListItem>
        <ListItem>Description: {description}</ListItem>
        <ListItem>Min. Required Age: {age}</ListItem>
        {cost?.Wood && <ListItem>Wood Cost: {cost?.Wood}</ListItem>}
        {cost?.Food && <ListItem>Food Cost: {cost?.Food}</ListItem>}
        {cost?.Gold && <ListItem>Gold Cost: {cost?.Gold}</ListItem>}
        <ListItem>Build Time: {build_time}</ListItem>
        <ListItem>Reload Time: {reload_time}</ListItem>
        <ListItem>Hit Points: {hit_points}</ListItem>
        <ListItem>Attack: {attack}</ListItem>
        <ListItem>Accuary: {accuracy || 100}</ListItem>
      </List>
    </Container>
  );
};

export default UnitDetails;

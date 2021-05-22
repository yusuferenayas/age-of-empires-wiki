import {RouteProps} from "react-router-dom";
import {Units} from "Views/Units";
import {Home} from "Views/Home";
import {UnitDetails} from "Views/UnitDetails";

type RouteType = "home" | "units" | "unitDetails";
type PathType = "/" | "/units" | "/unit-details";
type RoutesType = {
  path?: PathType;
} & RouteProps;

export const routePath: {
  [key in RouteType]: PathType;
} = {
  home: "/",
  units: "/units",
  unitDetails: "/unit-details",
};

export const routes: RoutesType[] = [
  {
    path: routePath.home,
    component: Home,
    exact: true,
  },
  {
    path: routePath.units,
    component: Units,
  },
  {
    path: routePath.unitDetails,
    component: UnitDetails,
  },
];

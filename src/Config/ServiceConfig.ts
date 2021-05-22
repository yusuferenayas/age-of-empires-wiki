export const baseURL = "http://localhost:3004/"; //for Local Server
// export const baseURL = "https://json-server-yea.herokuapp.com/"; // for Prod Server

export type pathURLStrings = "units";
export type keyURLStrings = "getUnits";

export const pathURls: {[key in keyURLStrings]: pathURLStrings} = {
  getUnits: "units",
};

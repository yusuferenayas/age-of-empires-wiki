import SASSVariables from "./_variables.module.scss";

type ThemeVariablesType = {
  primaryColor: string;
  alternativeColor: string;
};

const variables = SASSVariables as ThemeVariablesType;

export const colors = {
  primary: variables.primaryColor,
  alternativeColor: variables.alternativeColor,
};

import React, {useState} from "react";
import {
  Box,
  Typography,
  Slider,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 200,
    label: "200",
  },
];

const CostsFilter = () => {
  const [value, setValue] = useState(0);
  const [isFilterChecked, setIsFilterChecked] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(0);
    setIsFilterChecked(event.target.checked);
  };

  const valuetext = (value: number) => {
    return `${value}`;
  };

  return (
    <Box display="flex" paddingY={4}>
      <Typography variant="body1" gutterBottom color="primary">
        <FormControlLabel
          control={
            <Checkbox
              checked={isFilterChecked}
              onChange={handleChange}
              name="Wood"
              color="primary"
            />
          }
          label="Wood"
        />
      </Typography>
      <Box paddingLeft={4} width="100%">
        <Slider
          value={value}
          max={200}
          getAriaValueText={valuetext}
          onChange={(event, value) => setValue(value as number)}
          step={10}
          marks={marks}
          valueLabelDisplay="on"
          disabled={!isFilterChecked}
        />
      </Box>
    </Box>
  );
};

export default CostsFilter;

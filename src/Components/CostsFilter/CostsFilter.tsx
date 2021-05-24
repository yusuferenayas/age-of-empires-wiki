import "./CostsFilter.scss";
import React, {FC, useState} from "react";
import {
  Box,
  Typography,
  Slider,
  Checkbox,
  FormControlLabel,
  capitalize,
} from "@material-ui/core";
import {CostsFilterTypes} from "Config";
import {useDispatch} from "react-redux";
import {setCostsFilter} from "Stores/Filter";

type CostsFilterProps = {
  label: CostsFilterTypes;
};

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

const CostsFilter: FC<CostsFilterProps> = ({label}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [isFilterChecked, setIsFilterChecked] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCostsFilter({costFilterType: label, costCount: null}));
    setValue(0);
    setIsFilterChecked(event.target.checked);
  };

  const handleSliderChange = (
    event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    dispatch(
      setCostsFilter({costFilterType: label, costCount: value as number})
    );
    setValue(value as number);
  };

  const valuetext = (value: number) => {
    return `${value}`;
  };

  return (
    <Box paddingBottom={4} id="costsFilter">
      <Box className="costsFilter__labelContainer">
        <Typography variant="body1" gutterBottom color="primary">
          <FormControlLabel
            control={
              <Checkbox
                checked={isFilterChecked}
                onChange={handleCheckboxChange}
                name={label}
                color="primary"
              />
            }
            label={capitalize(label)}
          />
        </Typography>
      </Box>
      <Box className="costsFilter__sliderContainer">
        <Slider
          value={value}
          max={200}
          getAriaValueText={valuetext}
          onChange={handleSliderChange}
          step={5}
          marks={marks}
          valueLabelDisplay="on"
          disabled={!isFilterChecked}
        />
      </Box>
    </Box>
  );
};

export default CostsFilter;

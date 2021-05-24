import "./AgesFilter.scss";
import {Box, Tabs, Tab} from "@material-ui/core";
import {useState} from "react";
import {AgeFilterTypes} from "Config";
import {useDispatch} from "react-redux";
import {setAgeFilter} from "Stores/Filter";

const ages: AgeFilterTypes[] = ["All", "Dark", "Feudal", "Castle", "Imperial"];

const AgesFilter = () => {
  const dispatch = useDispatch();
  const [ageIndex, setAgeIndex] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setAgeIndex(newValue);
    dispatch(setAgeFilter(ages[newValue]));
    return event;
  };

  return (
    <Box marginBottom={7} id="agesFilter">
      <Tabs
        value={ageIndex}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        {ages.map((item, index) => (
          <Tab label={item} key={index} />
        ))}
      </Tabs>
    </Box>
  );
};

export default AgesFilter;

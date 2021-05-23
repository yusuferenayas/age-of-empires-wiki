import "./AgesFilter.scss";
import {Box, Tabs, Tab} from "@material-ui/core";
import {useState} from "react";
import {AgeFilterTypes} from "Config";

const ages: AgeFilterTypes[] = ["All", "Dark", "Feudal", "Castle", "Imperial"];

const AgesFilter = () => {
  const [ageFilter, setAgeFilter] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setAgeFilter(newValue);
    return event;
  };

  return (
    <Box marginBottom={7}>
      <Tabs
        value={ageFilter}
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

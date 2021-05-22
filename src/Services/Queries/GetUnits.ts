import {pathURls} from "Config";
import {axiosHelper} from "Services/AxiosHelper";
import {UnitModel} from "Models";

const getUnits = async (): Promise<UnitModel[]> => {
  const {data} = await axiosHelper({
    method: "get",
    url: pathURls.getUnits,
  });

  return data;
};

export default getUnits;

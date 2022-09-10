import { useContext } from "react";
import { LocalizationContext } from "..//providers/LocalizationProvider";

const useLocalization = () => {
  return useContext(LocalizationContext);
};

export default useLocalization;

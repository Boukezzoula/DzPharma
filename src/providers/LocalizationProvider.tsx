import { createContext } from "react";
import { I18n } from "i18n-js";
import en from "../i18n/en";
import fr from "../i18n/fr";

export const LocalizationContext = createContext({
  t: (key, data) => {},
  i18n: {},
});

export const LocalizationProvider = ({ props }) => {
  const { t, children } = props;
  const i18n = new I18n(en, fr);
  i18n.enableFallback = true;
  i18n.defaultLocale = "en";
  i18n.locale = "en";
  return (
    <LocalizationContext.Provider value={{ t, i18n }}>
      {children}
    </LocalizationContext.Provider>
  );
};

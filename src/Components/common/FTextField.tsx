import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { useThemeContext } from "../../theme/ThemeContextProvider";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const ltrCache = createCache({
  key: "mui",
});

function FTextField({ ...props }: TextFieldProps) {
  const { direction } = useThemeContext();

  return (
    <CacheProvider value={direction === "rtl" ? rtlCache : ltrCache}>
      <div dir={direction}>
        <TextField {...props} />
      </div>
    </CacheProvider>
  );
}

export default FTextField;
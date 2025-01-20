import React from "react";
import { AppProvider } from "@toolpad/core/react-router-dom";
import { DashboardLayout, PageContainer } from "@toolpad/core";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { BRANDING, NAVIGATION } from "../../Routes/Routes";
import { useThemeContext } from "../../theme/ThemeContextProvider";

const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const ltrCache = createCache({
  key: "mui",
});

function Toolpad({ children }: any) {
  const { direction } = useThemeContext();

  return (
    <div dir={direction}>
      <CacheProvider value={direction === "rtl" ? rtlCache : ltrCache}>
        <AppProvider navigation={NAVIGATION} branding={BRANDING}>
          <DashboardLayout>
            <PageContainer>{children}</PageContainer>
          </DashboardLayout>
        </AppProvider>
      </CacheProvider>
    </div>
  );
}

export default Toolpad;

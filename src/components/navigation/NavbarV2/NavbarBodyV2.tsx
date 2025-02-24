import React from "react";
import useIsMobile from "../../../hooks/useIsMobile";
import NavbarDrawerV2 from "./NavbarDrawerV2";

type NavbarBodyPropsV2 = {
  isResponsive?: boolean;
  children: React.ReactNode;
};

function NavbarBodyV2({ isResponsive = true, children }: NavbarBodyPropsV2) {
  const isMobile = useIsMobile();
  return <>{isMobile && isResponsive ? <NavbarDrawerV2 /> : children}</>;
}

export default NavbarBodyV2;

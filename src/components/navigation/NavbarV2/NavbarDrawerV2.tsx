import { Box, Drawer } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks/useReduxStore";
import { closeDrawer } from "../../../store/reducers/NavbarDrawerReducer";

type NavbarDrawerV2Props = {
  children: React.ReactNode;
};

function NavbarDrawerV2({ children }: NavbarDrawerV2Props) {
  const drawerState = useAppSelector((state) => state.drawerState.isOpen);
  const dispatch = useAppDispatch();
  return (
    <div>
      <Drawer
        anchor="left"
        open={drawerState}
        onClose={() => dispatch(closeDrawer())}
      >
        <Box width={250} role="presentation">
          {children}
        </Box>
      </Drawer>
    </div>
  );
}

export default NavbarDrawerV2;

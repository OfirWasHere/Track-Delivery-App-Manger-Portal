import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks/useReduxStore";
import { closeDrawer } from "../../../store/reducers/NavbarDrawerReducer";
import { NavbarLinksModel } from "../../../utils/types";

type NavbarDrawerV2Props = {
  navbarRoutes: NavbarLinksModel[];
};

function NavbarDrawerV2({ navbarRoutes }: NavbarDrawerV2Props) {
  const drawerState = useAppSelector((state) => state.drawerState.isOpen);
  const dispatch = useAppDispatch();
  return (
    <Drawer
      anchor="left"
      open={drawerState}
      onClose={() => dispatch(closeDrawer())}
    >
      <Box width={250} role="presentation">
        <List>
          {navbarRoutes.map((route, index) => (
            <ListItem sx={{ textAlign: "right" }} key={index}>
              <ListItemText primary={route.routeName} />
            </ListItem>
          ))}
          <ListItem>
            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#212121",
                color: "#fff",
                "&:hover": {
                  bgcolor: "#424242",
                },
              }}
            >
              <Typography variant="h6">התחברות</Typography>
            </Button>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default NavbarDrawerV2;

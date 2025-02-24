import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";
import React from "react";
import NavbarRoutes from "../../../routes/NavbarRoutes";

function NavbarDrawerV2() {
  return (
    <div>
      <Drawer
        anchor={"left"}
        // open={isBurgerMenuOpen}
        // onClose={toggleBurgerMenu}
      >
        <Box
          width={250}
          role="presentation"
          //   onClick={toggleBurgerMenu}
          //   onKeyDown={toggleBurgerMenu}
        >
          <List>
            {NavbarRoutes.map((route, index) => (
              <ListItem
                sx={{ textAlign: "right" }}
                key={index}
                // onClick={() => moveToSection(index)}
              >
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
                onClick={() => {}}
              >
                <Typography variant="h6">התחברות</Typography>
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default NavbarDrawerV2;

// import React from "react";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   CardHeader,
//   Typography,
//   Grid,
//   IconButton,
// } from "@mui/material";
// import { Truck, ClipboardList, BarChart3, Users } from "lucide-react";

// export default function LandingPage() {
//   return (
    
//     <Box sx={{ minHeight: "100vh", bgcolor: "grey.100" }}>
//       <header>
//         <Box
//           component="nav"
//           sx={{
//             bgcolor: "background.paper",
//             boxShadow: 1,
//             px: 4,
//             py: 2,
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//             <Truck
//               style={{ color: "#1E88E5", height: "32px", width: "32px" }}
//             />
//             <Typography variant="h6" color="text.primary" fontWeight="bold">
//               TruckTrack
//             </Typography>
//           </Box>
//           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
//             {["Features", "About", "Contact"].map((text) => (
//               <Button
//                 key={text}
//                 href={`#${text.toLowerCase()}`}
//                 sx={{
//                   color: "text.secondary",
//                   "&:hover": { color: "#1E88E5" },
//                 }}
//               >
//                 {text}
//               </Button>
//             ))}
//           </Box>
//           <Button variant="contained" color="primary">
//             Log In
//           </Button>
//         </Box>
//       </header>
      













//       <main>
//         <Box
//           sx={{
//             textAlign: "center",
//             py: 8,
//             px: 4,
//           }}
//         >
//           <Typography
//             variant="h3"
//             fontWeight="bold"
//             mb={3}
//             color="text.primary"
//           >
//             Manage Your Fleet with Ease
//           </Typography>
//           <Typography
//             variant="h6"
//             color="text.secondary"
//             mb={4}
//             maxWidth="600px"
//             mx="auto"
//           >
//             TruckTrack helps businesses streamline their delivery operations,
//             track performance, and boost efficiency.
//           </Typography>
//           <Button variant="contained" size="large" sx={{ mr: 2 }}>
//             Get Started
//           </Button>
//           <Button variant="outlined" size="large">
//             Request Demo
//           </Button>
//         </Box>

//         <Box id="features" sx={{ bgcolor: "background.paper", py: 8 }}>
//           <Typography variant="h4" fontWeight="bold" textAlign="center" mb={6}>
//             Key Features
//           </Typography>
//           <Grid container spacing={4} justifyContent="center" px={4}>
//             {[
//               {
//                 icon: <Truck />,
//                 title: "Fleet Management",
//                 description:
//                   "Efficiently manage and track your entire fleet of trucks in real-time.",
//               },
//               {
//                 icon: <ClipboardList />,
//                 title: "Delivery Logging",
//                 description:
//                   "Easily log and manage deliveries with our intuitive interface.",
//               },
//               {
//                 icon: <BarChart3 />,
//                 title: "Performance Analytics",
//                 description:
//                   "Gain insights into your operations with comprehensive analytics and reporting.",
//               },
//               {
//                 icon: <Users />,
//                 title: "Team Collaboration",
//                 description:
//                   "Improve communication and coordination among your team members.",
//               },
//             ].map(({ icon, title, description }, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index}>
//                 <FeatureCard
//                   icon={icon}
//                   title={title}
//                   description={description}
//                 />
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </main>

//       <footer>
//         <Box
//           sx={{
//             bgcolor: "grey.900",
//             color: "common.white",
//             textAlign: "center",
//             py: 4,
//           }}
//         >
//           <Typography variant="body2">
//             &copy; 2023 TruckTrack. All rights reserved.
//           </Typography>
//         </Box>
//       </footer>
//     </Box>
//   );
// }

// function FeatureCard({ icon, title, description }: any) {
//   return (
//     <Grid item xs={12} sm={6} md={8}>
//       <Card elevation={2}>
//         <CardHeader
//           avatar={icon}
//           title={<Typography variant="h6">{title}</Typography>}
//         />
//         <CardContent>
//           <Typography variant="body2" color="text.secondary">
//             {description}
//           </Typography>
//         </CardContent>
//       </Card>
//     </Grid>
//   );
// }










import React, { useState } from "react";
import {
  Box,
  Typography,
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Link,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import useIsMobile from "../../Hooks/useIsMobile";
import RoutesNav from "../../Routes/RoutesNav";
import "./Navbar.css";
import { Truck } from "lucide-react";
import BurgerMenuIcon from "../../common/BurgerMenu/BurgerMenuIcon/BurgerMenuIcon";
import LoginModal from "../../common/LoginModal/LoginModal";

interface navbarProps {
  onLoginClick: () => void;
}

// function renderNavLinks() {
//   return RoutesNav.map((route, index) => (
//     <NavLink className={"NavLinks"} to={route.path} key={index}>
//       <Typography variant="h6" sx={{ color: "4B5563" }}>
//         {route.routeName}
//       </Typography>
//     </NavLink>
//   ));
// }

function navbarDesktop({ onLoginClick }: navbarProps): JSX.Element {
  return (
    <Box>
      <AppBar
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          px: 4,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Truck size={32} color="#2563EB" style={{ marginRight: 16 }} />

            <Typography variant={"h6"} color={"text.primary"} fontWeight="bold">
              TruckTrack
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              flex: 1,
              pr: 2,
            }}
          >
            {RoutesNav.map((route, index) => (
              <Link
                href={`#${route.toPath}`}
                className={"NavLinks"}
                key={index}
              >
                <Typography variant="h6" sx={{ color: "4B5563" }}>
                {route.routeName}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box>
            <Button
              variant="contained"
              size="large"
              sx={{ bgcolor: "#212121", color: "#fff" }}
              onClick={onLoginClick}
            >
              התחברות
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function navbarMobile({ onLoginClick }: navbarProps) {
  return (
    <Box position="absolute" right={"24px"} top={"24px"}>
      <Box>
        {/* <BurgerMenuIcon /> */}
      </Box>
    </Box>
  );
}

function Navbarj(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const isMobile = useIsMobile();
  return (
    <Box sx={{ flexGrow: 1 }} display={"block"}>
      <LoginModal open={isModalOpen} onClose={handleCloseModal} />
      {!isMobile && navbarDesktop({ onLoginClick: handleOpenModal })}
      {isMobile && navbarMobile({ onLoginClick: handleOpenModal })}
    </Box>
  );
}











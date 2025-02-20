import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useThemeContext } from "../../../theme/ThemeContextProvider";
import saveUserDetails from "../../../services/userService";

function Dashboard() {
  const { firebaseLogout } = useAuth();
  const { toggleDirection } = useThemeContext();

  return (
    <div>
      <p>This is the dashboard. Log out here:</p>
      <button onClick={firebaseLogout}>Logout</button>
      <br />
      <button onClick={toggleDirection}>Change Direction</button>
    </div>
  );
}

export default Dashboard;

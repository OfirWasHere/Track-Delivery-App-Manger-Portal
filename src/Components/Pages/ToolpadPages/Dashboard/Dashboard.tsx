import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useThemeContext } from "../../../theme/ThemeContextProvider";

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

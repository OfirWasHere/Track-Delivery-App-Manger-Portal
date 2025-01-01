import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useThemeContext } from "../../theme/ThemeContextProvider";

function Dashboard() {
  const { firebaseLogout } = useAuth();
  const { toggleDirection } = useThemeContext();
  return (
    <div>
      this is hte dashboard, log out jere:
      <button onClick={firebaseLogout}>logout</button>
      <br />
      <button onClick={toggleDirection}>change dir</button>
    </div>
  );
}

export default Dashboard;

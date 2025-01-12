import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useThemeContext } from "../../../theme/ThemeContextProvider";
import { useToasty } from "../../../common/ToastNotification";

function Dashboard() {
  const { firebaseLogout } = useAuth();
  const { toggleDirection } = useThemeContext();
  const showToast = useToasty();

  const handleChangeDirection = () => {
    toggleDirection();
    showToast({
      message: "Direction changed successfully!",
      type: "warning",
    });
  };

  return (
    <div>
      <p>This is the dashboard. Log out here:</p>
      <button onClick={firebaseLogout}>Logout</button>
      <br />
      <button onClick={handleChangeDirection}>Change Direction</button>
    </div>
  );
}

export default Dashboard;

import React, { useEffect } from "react";
import useAuth from "../Hooks/useAuth";

function AccountSidebarFooter() {
  const { loader, user } = useAuth();

  if (loader) {
    return <div>loading account</div>;
  }

  return (
    <div>
      {user?.displayName}
      {user?.email}
      {/* {user?.photoURL} */}
    </div>
  );
}

export default AccountSidebarFooter;

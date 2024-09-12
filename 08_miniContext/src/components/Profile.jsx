import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  return <div className="text-4xl">Welcome {user.username}</div>;
}

export default Profile;

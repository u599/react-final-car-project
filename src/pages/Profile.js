import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Profile = () => {
  const { user } = useContext(AppContext);

  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No user logged in.</p>
      )}
    </div>
  );
};

export default Profile;

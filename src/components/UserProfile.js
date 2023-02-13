import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";
import { editAvatar, getUserProfile } from "../utils/Api";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";

function UserProfile() {
  const { user } = useContext(UserContext);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserProfile(user.username)
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [user.username]);

  if (error) {
    return <ErrorPage message={error} />;
  }

  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <div className="item-container">
      <div>
        <div id="item-name">{profile.username}</div>
        <img
          id="item-image"
          width={220}
          alt={"user profile img"}
          src={profile.avatar_url}
        />
        {/* <button id="edit-img" onClick={() => {
          editAvatar(profile.username,'https://images.app.goo.gl/Rd5t3XvntAKZ6Qmz9')
        }}>
          <span className="fa-regular fa-pen-to-square"></span>
        </button> */}
      </div>
      <div className="item-details">
        <div>My Kudos: {profile.kudos}</div>
        <div>Items In Basket:{profile.items_in_basket}</div>
        <div>Item Ordered{profile.items_ordered}</div>
        <Link to={"/items"}>ITEMS PAGE</Link>
      </div>
    </div>
  );
}

export default UserProfile;

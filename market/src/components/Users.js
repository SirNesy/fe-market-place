import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";
import { getUsers, increaseKudos } from "../utils/Api";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({});
  const [error, setError] = useState(null);

  
  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err);
    });
  }, [userDetails]);

  if (error) {
    return <ErrorPage message={error} />;
  }

  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <div className="user-list">
      {users.map((userDt, i) => {
        return (
          <span key={i}>
            <div>{userDt.username}</div>
            <img id="user-img" src={userDt.avatar_url} alt={"User display pic"} />
            <button className="profile-button">
              <Link
                className="profile-button-link"
                to={`/users/${userDt.username}`}
                onClick={() => setUser(userDt)}
              >
                LOGIN
              </Link>
            </button>
            <button
              className="kudos-button"
              onClick={() =>
                 !user.username?alert("Please Login to give Kudos"): user.username === userDt.username? alert("😂Haha! You can not Kudos yourself!"):
                increaseKudos(userDt.username).then((profile) => {
                  setUserDetails(profile)
                  alert(`You have given ${userDt.username} a kudos 👍🏽`)
                  // setUpdate(true)
                })
              }
            >
              <div className="fa-solid fa-thumbs-up"></div>
            </button>
            <span className="kudos">{userDt.kudos}</span>
          </span>
        );
      })}
    </div>
  );
}

export default Users;

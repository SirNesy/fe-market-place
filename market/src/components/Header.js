import React, { useContext} from "react";
import { UserContext } from "../context/User";

function Header() {
  const { user } = useContext(UserContext);
  // console.log(user);

  return (
    <div>
      <span> {user.username}</span>
      <div>MARKETPLACE 🛒 </div>
    </div>
  );
}

export default Header;

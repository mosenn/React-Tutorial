import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    setUser(user);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    console.log("logout");
    window.location.reload();
  };
  return (
    <div>
      <nav>
        {user?.username ? (
          <ul>
            <li>logo</li>
            <li>{user.username}</li>
            <li onClick={logout}>logout</li>
          </ul>
        ) : (
          <ul>
            <li>logo</li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Header;

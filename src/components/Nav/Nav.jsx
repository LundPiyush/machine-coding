import React from "react";
import { useAuth } from "../../context/auth-context";

const Nav = () => {
  const { name } = useAuth();
  return <div>Nav - {name}</div>;
};

export default Nav;

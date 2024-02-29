import { useContext } from "react";
import Login from "../login/Login";
import Todo from "../todo/Todo";
import AuthContext from "../../contexts/AuthContext";

function AuthHandler() {
  const authContext = useContext(AuthContext);
  return <>{authContext.isLoggedIn ? <Todo /> : <Login />}</>;
}

export default AuthHandler;

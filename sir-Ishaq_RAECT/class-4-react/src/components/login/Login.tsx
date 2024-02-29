import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

function Login() {
  const authContext = useContext(AuthContext);
  return (
    <>
      <div>
        <div>Plaese Login</div>
        <div>
          <button
            type="button"
            onClick={() => {
              authContext.setAuthentication(true);
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
export default Login;

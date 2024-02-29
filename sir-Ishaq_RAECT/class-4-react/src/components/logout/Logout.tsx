import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

function Logout() {
  const authContext = useContext(AuthContext);
  return (
    <>
      <div>
        <div>
          <button
            type="button"
            onClick={() => {
              authContext.setAuthentication(false);
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
export default Logout;

import "./App.css";
import { useEffect, useState } from "react";
import AuthContext from "./contexts/AuthContext";
import AuthHandler from "./components/authHandler/AuthHandler";

function App() {
  useEffect(() => {
    console.log("useeffect");
    const isLoggIn = localStorage.getItem("isLoggIn") === "1";
    setIsAuth(isLoggIn);
  }, []);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const contextValue = {
    isLoggedIn: isAuth,
    setAuthentication: (val: boolean) => {
      localStorage.setItem("isLoggIn", val ? "1" : "0");
      setIsAuth(val);
    },
  };

  return (
    <div>
      <AuthContext.Provider value={contextValue}>
        {/* {isAuth ? <Todo /> : <Login onLogin={setLoginHandler} />} */}
        <AuthHandler />
      </AuthContext.Provider>
    </div>
  );
}

export default App;

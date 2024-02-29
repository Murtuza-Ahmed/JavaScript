import "./App.css";
import { useState } from "react";
import AuthContext from "./contexts/AuthContext";
import AuthHandler from "./components/authHandler/AuthHandler";

function App() {
  // const [items, setItems] = useState<string[]>([
  //   "hello",
  //   "wellcome",
  //   "good bay",
  // ]);

  const [isAuth, setIsAuth] = useState<boolean>(false);

  const contextValue = {
    isLoggedIn: isAuth,
    setAuthentication: (val: boolean) => setIsAuth(val),
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

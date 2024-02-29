import "./App.css";
import { useState } from "react";
import AuthContext from "./contexts/AuthContext";
import AuthHandler from "./components/authHandler/AuthHandler";

function App() {
  const [items, setItems] = useState<string[]>([
    "hello",
    "wellcome",
    "good bay",
  ]);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const setLoginHandler = (val: boolean) => {
    setIsAuth(val);
  };

  // const addItemHandler = (itemText: string) => {
  //   setItems([...items, itemText]);
  // };
  
  return (
    <div>
      <AuthContext.Provider value={{ isLoggedIn: isAuth }}>
        {/* {isAuth ? <Todo /> : <Login onLogin={setLoginHandler} />} */}
        <AuthHandler setLoginHandler={setLoginHandler} />
      </AuthContext.Provider>
    </div>
  );
}

export default App;

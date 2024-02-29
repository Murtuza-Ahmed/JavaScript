import Login from "../login/Login";
import Todo from "../todo/Todo";

function AuthHandler({
  setLoginHandler,
}: {
  setLoginHandler: (a: boolean) => void;
}) {
  return <>{false ? <Todo /> : <Login onLogin={setLoginHandler} />}</>;
}

export default AuthHandler;

function Login({ onLogin }: { onLogin: (a: boolean) => void }) {
  return (
    <>
      <div>
        <div>Plaese Login</div>
        <div>
          <button
            type="button"
            onClick={() => {
              onLogin(true);
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

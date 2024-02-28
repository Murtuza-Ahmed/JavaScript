import "./myButton.css";
type ButtonProps = {
  children: string;
  type: "submit" | "button";
  themes: "ok" | "cancel";
  click?: () => void;
};

function MyButton({ children, type, themes, click }: ButtonProps) {
  return (
    <>
      <button
        type={type}
        onClick={click}
        style={
          themes === "ok"
            ? { backgroundColor: "blue" }
            : { backgroundColor: "red" }
        }
      >
        {children}
      </button>
    </>
  );
}
export default MyButton;

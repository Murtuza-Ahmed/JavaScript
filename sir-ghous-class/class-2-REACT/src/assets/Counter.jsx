import { useEffect } from "react";
function Counter({ count }) {
  useEffect(() => {
    console.log("First Count");
    /**
     * UnMount
     * Ye Batata He Component End Hogya He
     */
    return () => {
      console.log("Count End");
    };
  }, []);

  return (
    <>
      <div>
        <h1>{count}</h1>
      </div>
    </>
  );
}

export default Counter;

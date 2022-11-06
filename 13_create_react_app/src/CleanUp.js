import {useState, useEffect} from "react";

function Hello() {
  //   function byeFn() {
  //     console.log("bye");
  //   }
  //   function hiFn() {
  //     console.log("created");
  //     return byeFn;
  //   }
  //   useEffect(hiFn, []);

  useEffect(() => {
    console.log("created");
    // cleanup function
    // 컴포넌트가 destroy될때 실행된다.
    return () => console.log("destroyed");
  }, []);
  return <h1>Hello</h1>;
}

function CleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default CleanUp;

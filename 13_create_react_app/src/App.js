import Button from "./Button";
import CleanUp from "./CleanUp";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time");
  // 컴포넌트가 처음 렌더링될 때만 코드를 실행시키기 위해서 useEffect를 사용한다.
  useEffect(() => {
    console.log("call the api");
  }, []);
  useEffect(() => {
    console.log("search for", keyword);
  }, [keyword]);
  return (
    <>
      <div>
        <input value={keyword} onChange={onChange} type="text" placeholder="Search"></input>
        <h1 className={styles.title}>{counter}</h1>
        <button onClick={onClick}>click me</button>
        <Button text={"Continue"} />
      </div>
      <div>
        <CleanUp />
      </div>
    </>
  );
}

export default App;

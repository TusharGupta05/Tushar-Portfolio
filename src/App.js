import { useState } from "react";
import About from "./components/About/About";
import Info from "./components/Info/Info";
import styles from "./App.module.css";

function App() {
  const [active, setActive] = useState("experience");

  const changeActiveHandler = (value) => {
    setActive(value);
  };

  return (
    <main className={styles.mainContainer}>
      <About active={active} />
      <Info changeActive={changeActiveHandler} />
      <svg
        width="10"
        height="65"
        viewBox="0 0 10 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.scrollIndicator} ${
          active === "resume" ? styles.rotate : ""
        }`}
      >
        <path
          d="M5 65L9.33013 57.5H0.669873L5 65ZM4.25 0L4.25 58.25H5.75L5.75 0L4.25 0Z"
          fill="#3F4852"
        />
      </svg>
    </main>
  );
}

export default App;

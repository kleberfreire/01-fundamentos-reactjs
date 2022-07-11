import { useState } from "react";
import { Header } from "./components/Header";

import style from "./App.module.css";

import "./globals.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <aside>sidebar</aside>
        <main>main</main>
      </div>
    </div>
  );
}

export default App;

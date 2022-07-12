import { useState } from "react";
import { Header } from "./components/Header";

import style from "./App.module.css";

import "./globals.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>main</main>
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/AppRoutes";
import anime from "animejs/lib/anime.es.js";

import "./App.css";

function App() {
  const svgPath = document.querySelectorAll(".textRole");
  anime({
    targets: svgPath,
    loop: true,
    direction: "alternate",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 700,
    delay: (el, i) => {
      return i * 500;
    },
  });
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route) => {
          return (
            <Route key={route.path} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/AppRoutes";

import "./App.css";

function App() {
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

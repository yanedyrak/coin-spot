import { Route, Routes } from "react-router-dom";
import { routesData } from "./routesData";

export const Paths = () => {
  return (
    <Routes>
      {routesData.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};

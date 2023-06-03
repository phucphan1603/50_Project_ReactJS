import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { menus } from "./MainMenu";

export const Root = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <Navigate to={menus[0].path} replace={true} />
      ) : null}
      <Routes>
        {menus.map((menu) => {
          return (
            <Route key={menu.id} path={menu.path} element={menu.component} />
          );
        })}
      </Routes>
    </>
  );
};

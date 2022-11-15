import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import MainPage from "../pages/Mainpage";
import Map from "../pages/Map";
import Convenient from "../pages/Convenient";
import To_Map from "../pages/To_Map";
import Main from "../pages/Mainpage";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/mainPage" />}></Route>
        <Route path="/mainPage" element={<MainPage></MainPage>}></Route>
        <Route path="/to_map/" element={<To_Map></To_Map>}></Route>
        <Route path="/convenient" element={<Convenient></Convenient>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

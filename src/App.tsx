import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./screen/components/HeaderComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
}

export default App;

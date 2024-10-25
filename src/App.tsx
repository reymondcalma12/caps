import { Outlet } from "react-router-dom";
import "./assets/style/index.css";
import Header from "./layout/Header/Header1";

function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <Header/>
      <Outlet/>

    </div>
  );
}
export default App;

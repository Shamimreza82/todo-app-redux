import { Outlet } from "react-router";
import Navber from "./pages/Navber";

function App() {
  return (
    <div>
      <Navber></Navber>
        <Outlet></Outlet>
    </div>
  );
}

export default App;

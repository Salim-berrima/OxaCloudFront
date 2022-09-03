import logo from "./logo.svg";
import "./App.css";
import ListVms from "./Auth";
import ColorSchemesExample from "./Navbar";
import ListServers from "./Listserver";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import AddVm from "./AddVm";
function App() {
  return (
    <div className="App">
      <ColorSchemesExample></ColorSchemesExample>
      <BrowserRouter>
        <Routes>
          <Route path="/listvm" element={<Auth />}></Route>
          <Route path="/listserver" element={<ListServers />}></Route>
          <Route path="/addvm" element={<AddVm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Pages from "./Pages/Pages";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="hidden md:block w-full bg-green-900 text-white md:flex justify-between px-[6em] py-4">
        <p>+1(210)122-6789</p>
        <p>
          Enjoys Shopping with us |{" "}
          <span className="underline pb-3">Shop now </span>
        </p>
        <p> More information</p>
      </div>
      <Pages />
 
    </div>
    </BrowserRouter>
  );
}

export default App;


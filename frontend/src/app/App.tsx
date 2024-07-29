import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../Navbar";
import { Paths } from "./paths/Paths";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="width-[95%] ml-[5%]">
          <Paths />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import "./styles.scss";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routing />
      </div>
    </BrowserRouter>
  );
}

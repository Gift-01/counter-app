import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./counter";
import Error404Page from "./404";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

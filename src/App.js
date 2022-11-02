import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./counter";
import Error404Page from "./404";
import "./styles/App.css";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Counter App</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
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

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import MainScreen from "../src/page/MainScreen/MainScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<MainScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
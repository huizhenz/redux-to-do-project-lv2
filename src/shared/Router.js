import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import App from "../App";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

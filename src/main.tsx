import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <ConfigProvider locale={zhCN}>
      <Routes>
        <Route path="/user/*" element={<App />} />
        <Route path="/team/*" element={<App />} />
      </Routes>
    </ConfigProvider>
  </Router>
);

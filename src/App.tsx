import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyLayout from "./components/MyLayout";
import Tom from "./pages/tom";
import Bill from "./pages/bill";

function App() {
  return (
    <MyLayout>
      <Routes>
        <Route path="tom" element={<Tom />} />
        <Route path="bill" element={<Bill />} />
      </Routes>
    </MyLayout>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouterPrimary from "./router/RouterPrimary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RouterPrimary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

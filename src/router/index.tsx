import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play" element={<>Play</>} />
      <Route path="/help" element={<>Help</>} />
      <Route path="/about" element={<>About</>} />
      <Route path="/settings" element={<>Settings</>} />
    </Routes>
  );
}

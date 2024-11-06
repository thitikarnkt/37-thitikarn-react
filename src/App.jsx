import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import User from "./pages/User";
import Admin from "./pages/Admin";
import Owner from "./pages/Owner";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="User" element={<User/>}/>
          <Route path="Admin" element={<Admin/>}/>
        </Route>
        <Route path="/Owner" element={<Owner/>} />
      </Routes>
    </BrowserRouter>
  )
}

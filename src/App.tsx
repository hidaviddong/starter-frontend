import { Routes, Route } from "react-router-dom"
import Home from "@/components/Home";
import About from "@/components/About";
export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  )
}

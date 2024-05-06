import Html from "./html"
import Htmlpage from "./htmlpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
function App() {
  return(
    <>
    <Htmlpage/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Html/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
    </>
  )

  
}

export default App

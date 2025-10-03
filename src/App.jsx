import { BrowserRouter, Route, Routes, Router} from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from "./Components/Nav";
import Index from "./Pages/Index";


function App() {


  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Index/>}></Route>
    </Routes>
    </>
  )
}


export default App

import { BrowserRouter, Route, Routes, Router} from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from "./Components/Nav";
import Index from "./Pages/Index";


function App() {
  const location = useLocation();
  const isHome = location.pathname


  return (
    <> 
      <div className={isHome ? "home-page" : ""}>
        <Nav/>
        <Routes>
          <Route path='/' element={<Index/>}></Route>
          </Routes>
      </div>
    </>
  )
}


export default App

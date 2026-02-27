import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from "./Components/Nav";
import { Index } from "./Pages/Index";
import Footer from "./Components/Footer";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <div className={isHome ? "home-page" : ""}>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <Footer/>      
      </div>
    </>
  );
}

export default App;

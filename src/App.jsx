import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./Components/HomeLayout";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeLayout />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
import { Outlet } from "react-router-dom";

import HeaderMain from "./partials/header/HeaderMain";
import Footer from "./partials/footer/Footer";

//css import 
import './public/css/index.css'

function App() {
  return (
    <>
      <HeaderMain/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
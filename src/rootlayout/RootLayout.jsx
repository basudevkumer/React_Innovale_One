import { Outlet } from "react-router-dom";
import Menu from "../component/menu/Menu";
import Footer from "../component/footer/Footer";

const RootLayout =  ()=>{
  return(
     <>
      
      <Menu/>
      <Outlet/>
      <Footer/>

     </>
  )
}

export default RootLayout;
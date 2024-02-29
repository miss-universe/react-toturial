
import React,{Component}from "react";
import Navbar from "./componente/Navbar";
import Banner from "./componente/Banner";
import Cards from "./componente/Cards";
import Search from "./componente/Search";
import Logo from "./componente/Logo";
import Footer from "./componente/Footer";

import "./App.css"

class App extends Component{
 
    render(){
        
        return(
            <div>
          <Navbar/>
          <Banner/>
          <Cards/>
          <Search/>
          <Logo/>
          <Footer/>
            </div>
        )
    }
}
export default App;
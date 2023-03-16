import React from "react";
import Home from "./Home";



import Polaris from "./Polaris"



import { AppProvider as PolarisProvider } from "@shopify/polaris";


const App = () =>{
 return(
    <>
   <Home></Home>

 {/* <PolarisProvider><Polaris></Polaris></PolarisProvider>  */}

    </>
 );

};







export default App;
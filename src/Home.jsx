import React from "react";
import Cookies from 'universal-cookie';
const Home = () =>{
    
    const cookies = new Cookies();
    cookies.set('myCat', 'abc', { path: '/' });
    console.log(cookies.get('myCat')); // Pacman
   
 return(
    <>
        <section> 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-lg-6">
                            <h1> <span id="visits"></span> views</h1>
                            </div>    
                        </div>                        


                    </div>
                </div>
            </div>
        </section>              
    </>
 );

};







export default Home;
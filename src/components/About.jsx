import React,{ Component } from 'react';
import {Link } from 'react-router-dom';
class About extends Component{

    render(){
        return(
            <>
                <h1>This is about page</h1>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li><Link to={'/'} > Go to Home </Link></li>
                     
                    </ul>
                    </nav>
            </>
        );
    }

}

export default About;
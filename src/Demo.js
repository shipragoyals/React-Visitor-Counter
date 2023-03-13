import React from 'react';
import { Component } from 'react';



class Demo extends Component {
  constructor(){
    super();
    // Set initial state
    this.state = { show: false};

   
// Binding this state
    this.showModel = this.showModel.bind(this);
  
  }

  showModel=()=>{
    this.setState({show:!this.state.show});
  };
 

    render() {
      var show = this.state.show;
      var data = this.props.value;
      return(
          <>
           
          { show == true ? (
              <div className="model">
              
              <button className="close" onClick={this.showModel}>close</button>
                <h1> Hello i am model</h1>
            </div>
            ):(    <button onClick={this.showModel}>Click Me</button>
              
              )
          }
           <h2>My name is {data.name} </h2>
           <h2>My age is {data.age}</h2>
           </>
           );
    }
  }
  

export default Demo;



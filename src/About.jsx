import React from "react";
import {FormLayout, TextField, ButtonGroup,Button} from '@shopify/polaris';

const About = () =>{
 return(
    <>
      <div className="polaris_info">
      <h3>Configration Information  </h3>
      <FormLayout>
      <TextField label="API Key" onChange={() => {}} autoComplete="off" />
      <TextField
        type="text"
        label="Secret Key"
        onChange={() => {}}
        autoComplete="email"
      />
       <ButtonGroup>
      <Button primary>Save</Button>
      <Button>Cancel</Button>
    </ButtonGroup>
    </FormLayout>
    </div>
    </>
 );

};







export default About;
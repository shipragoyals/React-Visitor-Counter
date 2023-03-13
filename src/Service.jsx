import React from "react";
import {FormLayout, TextField, ButtonGroup,Button} from '@shopify/polaris';

const Service = () =>{
 return(
    <>
      <div className="polaris_info">
      <h3>Configration Information  </h3>
      <FormLayout>
      <TextField label="API Key" onChange={() => {}} autoComplete="off" />
     
       <ButtonGroup>
      <Button primary>Save</Button>
      <Button>Cancel</Button>
    </ButtonGroup>
    </FormLayout>
    </div>
    </>
 );

};







export default Service;
import React, { useEffect, useState } from 'react';


export default function Home() {
    const [visit, setVisit] = useState(1)
    const [value, setValue] = useState(false);
    const checkItem = (localStorage.getItem('value') !== null);
    console.log("before value " + checkItem)

    const changeValue = true;
    useEffect(() => {
        if (!checkItem == false) {
            setValue(localStorage.setItem('value', changeValue)); 
        }
      
    },[])
 
    
    console.log("after value " + checkItem)

   
    return (
        <div>
            <p>{visit}</p>
        </div>
    );
};


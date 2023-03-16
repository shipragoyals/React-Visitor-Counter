import React, { useState,useEffect } from 'react'; 

const Home = () =>{
    
    const [user, setUser] = useState();
    const [ip , setIP] = useState();
    const checkItem = (localStorage.getItem('IP') !== null)
    const [newCount , setNewCount] = useState();
    
   
    const fetchData = async () => {
        const getResponse = await fetch(`https://api.countapi.xyz/get/epsweb.demandtech.org/5b87f10a-bf47-400a-b6ad-a0bcbf6f9272`)
        const response = await fetch(`https://api.countapi.xyz/set/epsweb.demandtech.org/5b87f10a-bf47-400a-b6ad-a0bcbf6f9272?value=${newCount}`)
        const hitResponse = await fetch(`https://api.countapi.xyz/hit/epsweb.demandtech.org/5b87f10a-bf47-400a-b6ad-a0bcbf6f9272`)
        // console.log(response.value)
        if (!hitResponse.ok) {
            throw new Error('count is not there')
        }
        else {
            return hitResponse.json()
        }

    }

    const fetchIp =()=>{
        return fetch("https://ipapi.co/json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setIP(data.ip)
        })
    }
    useEffect(()=>{
        fetchData()
        .then((res) => {
            setNewCount(res.value)
        })
        .catch((e) => {
            console.log(e.message)
        })
        fetchIp();
        
    },[])

    localStorage.setItem("IP", ip);
console.log(checkItem)
   
 return(
    <>
        <section> 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1>Hello{newCount}</h1>
                                <h2>{ip}</h2>
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
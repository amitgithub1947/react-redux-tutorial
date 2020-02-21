import React, { useState, useEffect }  from 'react';

function JokeFetching(){
    const[joke, setJoke] = useState("loading") 
    const[fname, setFname] = useState('John');
    const[lname, setLname] = useState('Dow');
  
    const getRandomJoke= (fname, lname)=>{
        fetch("http://api.icndb.com/jokes/random?firstName="+fname+"&lastName="+lname)
        .then(res=>res.json())
        .then(res2=>{
            console.log("called joke");
            setJoke(res2.value.joke)
        })
    }
    useEffect(()=>{
        getRandomJoke(fname, lname);
     },[])
    return (
        <div>
            I am joke fetching app
            <input type="text" value={fname} onChange={(e)=>setFname(e.target.value)}></input>
            <input type="text" value={lname} onChange={(e)=>setLname(e.target.value)}></input>
            <button onClick={()=>getRandomJoke(fname, lname)}>Get Random Joke</button>
            <br/>
            {joke}
        </div>
    )

}

export default JokeFetching;
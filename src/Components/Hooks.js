import React, { useState, useEffect } from 'react';

function Hooks(){
    const [state, setState] = useState({
        name: "mukesh",
        age : 21
    })
    useEffect(()=>{
        console.log("use effect called");
    },[state.age])
    return(
        <div>
            <p>{state.name}</p>
            <p>{state.age}</p>
            {/* <button onClick={()=>setState({ name:"suresh"})}>Change</button> */}
            <button onClick={()=>setState({...state , name:"suresh"})}>Change Name</button>
            <button onClick={()=>setState({...state , age:"10"})}>Change Age</button>
        </div>
    )
}

export default Hooks
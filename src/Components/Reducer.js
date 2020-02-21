import React, {useReducer} from 'react';

// const iState= "Ramesh";
const iState= {
    name: "Ramesh",
    wish:["eat","code",'sleep']
};
const reducer = (state, action)=>{
    // switch(action){
    //     case 'CHANGE_NAME':
    //         return "suresh"
    //     default:
    //         return state
    // }
    switch(action.type){
        case 'CHANGE_NAME':
            return {
                ...state,
                name:action.payload
            }
        default:
            return state
    }
}


function Reducer(){
    //const [name, distpatch] = useReducer(reducer, iState);
    const [data, distpatch] = useReducer(reducer, iState);
    const [data2, dispatch2] = useReducer(reducer, iState);
    const getName=() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(res2=>{
            distpatch({"type":"CHANGE_NAME", payload:res2[0].name})
        })
    }
    return(
        <div>
            <h5>Reducer</h5>
            {/* <p>my name is {name}</p> */}
            <p>my name is {data.name}</p>
            <p>I whish to {data.wish[0]}</p>
            {/* <button onClick={()=>{distpatch(CHANGE_NAME)}}>Change Name</button> */}
            <button onClick={()=>{distpatch({"type":"CHANGE_NAME", "payload":"Suresh"})}}>Change Name</button>
            <button onClick={()=>getName()}>Get Name</button>
            <p>i am {data2.name}</p>
            <p>i wish {data2.wish[0]}</p>
            <button onClick={()=>dispatch2({'type':'CHANGE_NAME', payload:"hitesh"})}>Change Name2</button>
        </div>
    )
}

export default Reducer;
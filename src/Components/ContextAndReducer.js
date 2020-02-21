import React, {useContext, useReducer, createContext} from 'react';

const MyContext = React.createContext();

const iState= {
    name : "Ramesh"
}

const reducer = (state, action)=>{
    switch(action.type){
        case 'CHANGE_NAME':
        return {
            name : action.payload
        }
        default : 
        return state
    }
}

const Coder=()=>{
    const myName = useContext(MyContext);
    return (
        <div>
            <p>i am coder1 and {myName.name}</p>
            <Coder2/>
        </div>
    )
}
const Coder2=()=>{
    const myName = useContext(MyContext);
    return (
        <div>
            <p>i am coder2 {myName.name}</p>
            <Coder3/>
            <button onClick={()=>myName.changeName({type:"CHANGE_NAME", payload:"Suresh"})}>Change Name2</button>
        </div>
    )
}
const Coder3=()=>{
    const myName = useContext(MyContext);
    return (
        <div>
            <p>i am coder3 and {myName.name}</p>
            <button onClick={()=>myName.changeName({type:"CHANGE_NAME", payload:"Hitesh"})}>Change Name3</button>
        </div>
    )
}
function ContextAndReducer(){
    const [data, dispatch] = useReducer(reducer, iState);
    return(
        <MyContext.Provider value={{name:data.name, changeName:dispatch}}>
        <div>
            I am Context and Reducer
            <Coder/>
        </div>
        </MyContext.Provider>
    )
}

export default ContextAndReducer;
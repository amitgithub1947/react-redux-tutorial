import React from 'react';

const myContext = React.createContext();
const Coder=()=>{
    return (
        <div>
            <Coder2/>
        </div>
    )
}

const Coder2 =()=>{
    return(
        <div>
            <Coder3/>
        </div>
    )
}
const Coder3 =()=>{
    return(
        <div>
            <h5>Hello</h5>
            <myContext.Consumer>
                {
                    (data)=>{
                        
                        return (
                            <React.Fragment>
                                <h5>my name is {data.name}</h5>
                                <h5>my age is {data.age}</h5>
                            </React.Fragment>
                        )
                    }
                }
            </myContext.Consumer>
            <Coder4/>
        </div>
    )
}
// to access static variable in class based component only

class Coder4 extends React.Component{
    static contextType = myContext;
    render(){
        return(
            <div>
                <h4> class Based Component</h4>
                <h5> my name is {this.context.name}</h5>
                <h5> my age is {this.context.age}</h5>
            </div>
        )
    }
}

function Context(){
    return(
        <div>
            This is context
            <myContext.Provider value= {{name:"Suresh", age:20}}>
                <Coder/>
            </myContext.Provider>
        </div>
    )
}

export default Context;
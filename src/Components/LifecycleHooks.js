import React from 'react';

class LifecycleHooks extends React.Component{
    constructor(props){
        super(props);
        console.log("constructor called");
        this.state = {
            name: "mukesh"
        }
    }
    componentDidMount(){
        console.log("Component Did Mount");
        localStorage.setItem("name" , "amit");
    }
    componentDidUpdate(){
        console.log("Component Did Update");
    }
    componentWillUnmount(){
        console.log("component will unmount")
        localStorage.removeItem("name");
    }
    render(){
        console.log("Render Called")
        return(
            <div>
                I am LifecycleHooks
                <button onClick={()=>this.setState({name:"amit"})}>Click Me</button>
            </div>
        )
    }
}

export default LifecycleHooks;
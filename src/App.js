import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Profile from './Components/Profile';
import Form from './Components/Form';
import LifecycleHooks from './Components/LifecycleHooks';
import Hooks from './Components/Hooks';
import JokeFetching from './Components/JokeFetching';
import Context from './Components/Context';
import Context2 from './Components/Context2';
import Reducer from './Components/Reducer';
import ContextAndReducer from './Components/ContextAndReducer';
import Redux1 from './Components/Redux1';
import UseSelectorAndUseDispatch from './Components/UseSelectorAndUseDispatch';


//class component
// class Coder extends React.Component{
//     render(){
//       return(
//         <div>
//             <p><b> Name:</b>{this.props.name}</p>
//             <p> <b>Status:</b>{this.props.status}</p>
//         </div>
//       )
//     }
// }

// Functional Component
const Coder=(props)=>{
  return (
    <div>
      <p><b> Name:</b>{props.name}</p>
      <p> <b>Status:</b>{props.status}</p>
      <p>{props.children}</p>
    </div>
  )
}

class App extends React.Component{
  render(){
    const arr = ['eat', 'sleep', 'code'];
    const data= arr.map((item)=>{
      return <li> {item} </li>
    }) 
    return (
      <BrowserRouter>
      <div >
        <Navbar/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/profile/:profile_id" component={Profile}></Route>
        <Route path="/form" component={Form}></Route>
        <Route path="/lifecyclehooks" component={LifecycleHooks}></Route>
        <Route path="/hooks" component={Hooks}></Route>
        <Route path="/jokefetching" component={JokeFetching}></Route>
        <Route path="/context" component={Context}></Route>
        <Route path="/context2" component={Context2}></Route>
        <Route path="/reducer" component={Reducer}></Route>
        <Route path="/contextandreducer" component={ContextAndReducer}></Route>
        <Route path="/redux1" component={Redux1}></Route>
        <Route path="/useSelectorAndUseDispatch" component={UseSelectorAndUseDispatch}></Route>
        
        
        <hr></hr>
        <ul>{data}</ul>
        <hr></hr>
        <Coder name="ramesh" status="single"/>
        <Coder name="suresh" status="commited">Inside Text</Coder>
        <Coder name="mukesh" status="coder"/>
        <hr></hr>
        <Title/>
      </div>
      </BrowserRouter>
    )
  }
}

class Title extends React.Component{
  constructor(){
    super()
    // this.state = {
    //   title: "amit",
    //   status: "programmer"
    // }
  //  this.changeName = this.changeName.bind(this)
  }
  state = {
    title: "amit",
    status: "programmer"
  }
  // When onClick = {this.changeName} to pass arugment use onClick={this.changeName.bind(this, "ramesh")
  //  changeName = (name) => {
  //     this.setState({
  //     title: name
  //   })
  // }

  changeName(name){
    this.setState({
      title: name
    })
  }
  render(){
    return(
      <div>
        <p>{this.state.title}</p>
        <button onClick={()=>this.changeName("ramesh")}> Change Name</button>
        {/* <button onClick={this.changeName.bind(this, "ramesh")}> Change Name</button> */}
      </div>
        
    )
  }
}
export default App;

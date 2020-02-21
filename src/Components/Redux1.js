import React from 'react';
import Profile from './Profile';
import Home from './Home';
import {connect} from 'react-redux';
import {AntoherName, addWish} from '../Actions/Action1';

class Redux1 extends React.Component{
    state = {
        name: "suresh"
    }
    
    changeName(name){
        this.setState({
            name:name
        })
    }
    render(){
        console.log(this.props)
        const myWish = this.props.myWish.map((item)=>{
            return <p key={Math.random}> {item}</p>
        })
        return(
            <div>
                <Home handlenameChild={(name)=>this.changeName(name)}/>
                {/* <Profile name={this.state.name}/> */}
                <p>I am from Reducer 1{ this.state.name}</p>
                <p>Props { this.props.myName}</p>
                {/* <button onClick={()=>{this.props.changeName("Suresh")}}>Change It</button> */}
                <button onClick={()=>{this.props.changeName()}}>Change It</button>
                <p> Wish list is {myWish}</p>
                <button onClick={()=>{this.props.addWish()}}>Add Wish</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        myName:state.name,
        myWish:state.wish
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
    //    changeName:(name)=>{dispatch({type:'CHANGE_NAME',payload:name})}
    changeName:()=>{dispatch(AntoherName())},
    addWish:()=>{dispatch(addWish())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Redux1);
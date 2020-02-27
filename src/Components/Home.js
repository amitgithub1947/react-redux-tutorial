import React from 'react';
import { Link} from 'react-router-dom';
import WithHOC from './WithHOC';

class  Home extends React.Component{
    state = {
        users : [{id:1, name : "mukesh"}, {id:2, name : "suresh"}, {id:3, name : "ramesh"}],
        homename : "reamesh"
    }
    render(){
        const myName = this.state.users.map((items)=>{
            return <Link to={"/profile/"+items.id}><p>{items.name}</p></Link>
        })
        console.log(this.props);
        return(
            <div>
              I am home
              {myName}
              <button onClick={()=>this.props.handlenameChild(this.state.homename)}>change name</button>
            </div>
        )
    }
}

export default WithHOC(Home);
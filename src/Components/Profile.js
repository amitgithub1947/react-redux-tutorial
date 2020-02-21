
import React from 'react';
import WithHOC from './WithHOC';

class Profile extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
              I am Profile and id is  {this.props.match.params.profile_id}
            </div>
          )
    }
  }

  export default WithHOC(Profile)
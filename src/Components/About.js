
import React from 'react';
const About=(props)=>{
    return(
      <div>
        I am About
        <button onClick={()=>props.history.push('/')}>Navigate To Home</button>
        <button onClick={()=>props.history.push('/profile/123')}>Navigate To Profile</button>
      </div>
    )
  }

  export default About
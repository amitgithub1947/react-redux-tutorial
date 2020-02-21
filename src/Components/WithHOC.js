import React from 'react';

const WithHOC=(Wcomponent)=>{

        const  NewComponent=(props)=>{
            return (
                <div style={{backgroundColor:"red"}}>
                    <Wcomponent name="amit" {...props}/>
                </div>
            )
        }
        return NewComponent;
}

export default WithHOC;
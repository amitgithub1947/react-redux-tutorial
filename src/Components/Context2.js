import React, {useContext} from 'react';

const NameContext = React.createContext();
const AgeContext = React.createContext();

const Coder3=()=>{
    return(
        <div>
            <NameContext.Consumer>
                {
                     (name)=>{
                        return(
                            <AgeContext.Consumer>
                                {
                                     (age)=>{
                                        return(
                                            <div>
                                                <p>my name is {name}</p>
                                                <p>my age is {age}</p>
                                            </div>
                                        )
                                    }
                                }
                               
                            </AgeContext.Consumer>
                        ) 
                    }
                }
               
            </NameContext.Consumer>
        </div>
    )
}

// to reduce the above logic to show data we use useContext.
const Coder4=()=>{
    const name = useContext(NameContext);
    const age = useContext(AgeContext);
    return(
        <div>
            <p>my name is {name}</p>
            <p>my age is {age}</p>
        </div>
    )
}

function Context2(){
    return(
        <NameContext.Provider value="ramesh">
            <AgeContext.Provider value={30}>
            <div>
                 This is context2
                 <Coder3/>
                 After using useContext
                 <Coder4/>
            </div>
            </AgeContext.Provider>
        </NameContext.Provider>
        
    )
}

export default Context2;


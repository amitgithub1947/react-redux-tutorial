
const NameReducer = (state='', action)=>{
    switch(action.type){
        case 'CHANGE_NAME':
        return action.payload
    }
    return  state
}

export default NameReducer
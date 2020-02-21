const iState = {
    name : "Ramesh",
    wishesh : ['eat', 'code']
}
const Reducer1 = (state=iState, action)=>{
    switch(action.type){
        case 'CHANGE_NAME':
        return {
            ...state,
            name:action.payload
        }
    }
    return  state
}

export default Reducer1

const WishReducer = (state=[], action)=>{
    switch(action.type){
        case 'ADD_WISH':
        return [...state, action.payload]
    }
    return  state
}

export default WishReducer
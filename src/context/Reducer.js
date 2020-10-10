const Reducer = (state,action) => {
    switch(action.type){
        case "ADD_TRANS":
            return [...state,action.payload]
        default:
            return state

    }
}

export default Reducer
var initialState = {
    runs : 0,
    results : []
}
var cricketReducer = (state=initialState,action)=>{
    if(action.type=="INCREMENT"){
        return {
            // results : state.results,
            ...state,
            runs : state.runs + 1
        }
    }
    if(action.type=="DECREMENT"){
        return {
            // results : state.results,
            ...state,
            runs : state.runs - 1
        }
    }
    if(action.type=="AddFour"){
return {
    // results : state.results,
    ...state,
    runs : state.runs+action.val
}
    }
    if(action.type=="AddSix"){
        return {
            // results : state.results,
            ...state,
            runs : state.runs+action.val
        }
    }
    if(action.type=="CAPTURE"){
        return {
            ...state,
            results : state.results.concat({time : `${new Date()}`,current : state.runs}),
            // runs : state.runs
        }
    }
return state;
}


export default cricketReducer;
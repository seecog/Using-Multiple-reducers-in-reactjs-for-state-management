import * as actions from '../actions'
var initialState = {
    runs : 0
}
var runsReducer = (state=initialState,action)=>{
    if(action.type==actions.INCREMENT){
        return {
            // results : state.results,
            ...state,
            runs : state.runs + 1
        }
    }
    if(action.type==actions.DECREMENT){
        return {
            // results : state.results,
            ...state,
            runs : state.runs - 1
        }
    }
    if(action.type==actions.AddFour){
return {
    // results : state.results,
    ...state,
    runs : state.runs+action.val
}
    }
    if(action.type==actions.AddSix){
        return {
            // results : state.results,
            ...state,
            runs : state.runs+action.val
        }
    }
   
return state;
}
export default runsReducer;
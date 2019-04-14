import * as actions from '../actions';
var initialState = {
   
    results : []
}
var resultsReducer = (state=initialState,action)=>{
   
    if(action.type==actions.CAPTURE){
        return {
            ...state,
            results : state.results.concat({time : `${new Date()}`,current : action.val}),
            // runs : state.runs
        }
    }
return state;
}


export default resultsReducer;
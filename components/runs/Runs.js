import React,{Component} from 'react';
import {connect} from 'react-redux';
class Runs extends Component{
constructor(){
    super();
}
render(){
    return (
        <div>
<h2>Total run is {this.props.iruns}</h2>
<hr/>
<button onClick={this.props.onIncrement}>Increment</button> | 
<button onClick={this.props.onDecrement}>Decrement</button> | 
<button onClick={this.props.onFour}>Play 4</button> | 
<button onClick={this.props.onSix}>Play 6</button> | 
<button onClick={()=>this.props.onCapture(this.props.iruns)}>Capture</button> 
<hr/>
<ul>
{

    <ul>
        {this.props.results.map((result)=>{
return (
    <li>
    {result.time} : {result.current}
    </li>
)
        })
     
        }
        </ul>
       

}
</ul>
        </div>
    )
}

}

let mapStateToProps = (state)=>{
return {
    iruns : state.mruns.runs,
    results : state.mresults.results
}
}

let mapDispatchToProps = (dispatch)=>{
return {
    onIncrement : ()=>dispatch({type : 'INCREMENT'}),
    onDecrement : ()=>dispatch({type:'DECREMENT'}),
    onFour : ()=>dispatch({type:'AddFour',val : 4}),
    onSix : ()=>dispatch({type:'AddSix',val : 6}),
    onCapture : (iruns)=>dispatch({type : 'CAPTURE',val : iruns})
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Runs);
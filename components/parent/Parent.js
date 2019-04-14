import React,{Component} from 'react';


const Child1 = ()=>{
    return (
        <div>
<h1>Inside child1</h1>
<Child2/>
            </div>
    )
}


const Child2 = ()=>{
    return (
        <div>
<h1>Inside final child2</h1>
Message from parent is 
<ParentContext.Consumer>
{(data)=>data}
</ParentContext.Consumer>
            </div>
    )
}

var ParentContext = React.createContext();
class Parent extends Component{

constructor(){
    super();
    this.state = {
a : 100
    };
}

render(){
    return (
        <div>
            <ParentContext.Provider value={this.state.a}>
        <h1>Inside paret</h1>
        <Child1/>
        </ParentContext.Provider>
        </div>
    )
}
}

export default Parent;
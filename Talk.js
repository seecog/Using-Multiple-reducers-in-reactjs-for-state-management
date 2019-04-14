import React,{Component} from 'react';
import axios from 'axios';
class Talk extends Component{

constructor(){
    super();
    this.state = {
        title : '',
        body : ''
    }
}

componentWillMount(){
    let id = this.props;
    console.log('Id is ',id)
    // axios.get("https://jsonplaceholder.typicode.com/posts/"+id).then((stalk)=>{
// this.setState({
//     talk : res.data
// })
// console.log('>> ',stalk.data);
// this.setState({
//     title : stalk.data.title,
//     body : stalk.data.body
// })
//     })
//     .catch((err)=>{
// console.log('The error is ',err);
//     });
}

render(){
    return (
        <div>
<h2>{this.state.title}</h2>
<p>
{this.state.body}
    </p>
            </div>
    )
}

}

export default Talk;
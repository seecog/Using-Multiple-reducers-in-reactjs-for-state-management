import React,{Component} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
class Talks extends Component{

constructor(){
super();
this.state = {
    talks : []
}
}

componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
console.log('The final response is ',res);
this.setState({
    talks : res.data
})
    })
    .catch((err)=>{
        console.log('The error is ',err);
    })
}

render(){
    return (
        <div>
<h1>List of talks</h1>
<table>
    <thead>
        <tr>
    <th>Title</th>
    <th>Body</th>
    </tr>
    </thead>
    <tbody>
{
    this.state.talks.map((talk,i)=>{
return (
    <tr key={i}>
<td>
 <NavLink to={"/talksi/?id="+talk.id}>
{talk.title} []
</NavLink>
</td>
<td>{talk.body}</td>
        </tr>
)
    })
}
</tbody>
</table>
            </div>
    )
}
}

export default Talks;
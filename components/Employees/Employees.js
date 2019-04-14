import React,{Component} from 'react';
import axios from 'axios';
import Addemp from './Addemp/Addemp'
class Employees extends Component{

constructor(){
    super();
   this.state = {
       employees : [],
       name : '',
       age : '',
       salary : '',
       btn_stt : false,
       edit_id : ''
   }
}

componentDidMount(){
this.getRecords();
}

setFormName=(event)=>{
console.log('Event is ',event.target.value)
this.setState({
name : event.target.value
})
}

setFormAge=(event)=>{
    console.log('Event is ',event.target.value)
    this.setState({
    age : event.target.value
    })
    }

    setFormSalary=(event)=>{
        console.log('Event is ',event.target.value)
        this.setState({
        salary : event.target.value
        })
        }

getRecords=()=>{
    axios.get("http://ec2-13-234-177-24.ap-south-1.compute.amazonaws.com:3000/api/employees").then((res)=>{
console.log('The list is ==>',res.data)
this.setState({
    employees : res.data
})
})
.catch((err)=>{
    console.log('The error is ',err);
})
}

deleteRecord=(id)=>{
    axios.delete("http://ec2-13-234-177-24.ap-south-1.compute.amazonaws.com:3000/api/employees/"+id).then((res)=>{
        console.log('The record deleted')
        this.getRecords();
        })
        .catch((err)=>{
            console.log('The error is ',err);
        })
}


clearField=()=>{
    this.setState({
        name : '',
        age : '',
        salary : ''
    })
    }

save = ()=>{
    console.log('The task is ',this.state.name,this.state.age,this.state.salary)
    axios.post("http://ec2-13-234-177-24.ap-south-1.compute.amazonaws.com:3000/api/employees",{
        name : this.state.name,
        age : this.state.age,
        salary : this.state.salary
    }).then((res)=>{
        console.log('Record posted');
        this.clearField();
        this.getRecords();
    })
    .catch((err)=>{
        console.log('The today error is ',err);
    })
}

editRecord=(obj)=>{
    this.setState({
        name : obj.name,
        age : obj.age,
        salary : obj.salary,
        btn_stt : true,
        edit_id : obj._id
    })
}

updateRecord=()=>{
    axios.put("http://ec2-13-234-177-24.ap-south-1.compute.amazonaws.com:3000/api/employees/"+this.state.edit_id,{
        name : this.state.name,
        age : this.state.age,
        salary : this.state.salary
    }).then((res)=>{
        console.log('Record updated');
        this.clearField();
        this.getRecords();
    })
    .catch((err)=>{
        console.log('The today error is ',err);
    })
}

render(){
    return (
        <div>
 <Addemp update={this.updateRecord} add={(event)=>this.save()}  change={(event)=>this.setFormName(event)} changeage={(event)=>{ this.setFormAge(event)}} changesal={(event)=>this.setFormSalary(event)} name={this.state.name} age={this.state.age} salary={this.state.salary}stt={this.state.btn_stt}/>           
<table>
    <thead>
    <th>Name</th><th>Age</th><th>Salary</th><th>Action</th>
    </thead>
    <tbody>
{
    this.state.employees.map((x,i)=>{
return (
    <tr key={i}>
<td>
    {x.name}  
</td>
<td>
    {x.age}  
</td>
<td>
    {x.salary}  
</td>
<td>
<button onClick={()=>this.deleteRecord(x._id)}>[-]</button> | 
<button onClick={()=>this.editRecord(x)}>Edit</button>
    </td>
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

export default Employees;
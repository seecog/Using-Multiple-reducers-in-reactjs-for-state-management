import React from 'react';


const Addemp = (props)=>{
    let btn = null;
    if(!props.stt){
 btn= (

<button onClick={props.add}>Add Employee</button>

)
    }
    else{
btn=(<button onClick={props.update}>Update Employee</button>)
    }
return (
    <div>
<p>
Name : <input name="name" onChange={props.change} value={props.name}/>
</p>
<p>
Age : <input name="age" onChange = {props.changeage} value={props.age} />
</p>
<p>
Salary : <input name="salary" onChange={props.changesal} value={props.salary} />
</p>
<p>

{btn}
    </p>
        </div>
)

}

export default Addemp;
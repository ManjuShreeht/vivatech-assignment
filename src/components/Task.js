import React, { useEffect, useState } from 'react'
import {nanoid }from 'nanoid'
import List from './List'
import Edit from './Edit'
import Export from './Export'

const Task = () => {
    const [data,setData]=useState({
        name:"",
        description:"",
        list:"",
       
    })

    const [list1,setList1]=useState([])
    const [list2,setList2]=useState([])
    const [todo,setTodo]=useState([])
    useEffect(()=>{
        const newlist=[...todo]
     
        
        const newdata1=  newlist.filter((todo)=> todo.list==="list1"
        
        )
        const newlist1=[...todo]
        const secondlist=newlist1.filter((todo)=> todo.list==="list2")
        
        
        setList1(newdata1)
        setList2(secondlist)
       

    },[todo])
  

    const[editdata,setEditData]=useState({
        name:"",
        description:"",
        list:"",
       
    })
   
    
    const [editId,setEdit]=useState(null)

const handleChange=(e)=>{
    e.preventDefault()
    const val=e.target.value;
    const fieldName=e.target.getAttribute('name');
    const newlist={...data}   
    newlist[fieldName]=val
    setData(newlist)
    
}

const handleDataEdit=(e)=>{
    e.preventDefault()
    const val=e.target.value;
    const fieldName=e.target.getAttribute('name');
    const newlist={...editdata} 
    
    newlist[fieldName]=val
    setEditData(newlist)
    console.log(newlist)
 
}


const handleSubmit=(e)=>{
    e.preventDefault();
    
    const newlist={
        id:nanoid(),
        name:data.name,
        description:data.description,
        list:data.list
    }
    if(data.list==='list1'){

        const newlists=[...list1,newlist]
        setList1(newlists)
    }
    else if(data.list==='list2'){

        const newlists=[...list2,newlist]
        setList2(newlists)
    }
    const newlists=[...todo,newlist]
    setTodo(newlists)

}
console.log(todo)

const handleEdit=(e,item)=>{
e.preventDefault();

setEdit(item.id)

const formvalues={
    name:item.name,
    description:item.description,
    list:item.list, 
}
setEditData(formvalues)
}



const handleEditSubmit=(e)=>{
    e.preventDefault()

const editlist={
    id:editId,
    name:editdata.name,
    description:editdata.description,
    list:editdata.list
}


    
    // const  newlist=[...list1]
    // const  index=list1.findIndex((todo)=>
    
    // todo.id===editId
    // )
    // newlist[index]=editlist
    // setList1(newlist)
    
    // const  newlist1=[...list2]
    // const  index1=list2.findIndex((todo)=>
    
    // todo.id===editId
    // )
    // newlist1[index1]=editlist
    // setList2(newlist1)
const newlist=[...todo]
const index=newlist.findIndex((todo)=>todo.id===editId)
newlist[index]=editlist
    setTodo(newlist)
// }else if(editdata.list==='list2'){
//     console.log(editdata.list + "hiiii")
    
//    const newlist=[...list2]
//   const  index=list2.findIndex((todo)=>

//      todo.id===editId
// )
// newlist[index]=editlist
// setList2(newlist)

// }


setEdit(null)

}

const handleCancel=()=>{
    setEdit(null)
}


const handleDelete=(item)=>{
    if(item.list==='list1'){

        const newlist=[...list1]
        const index=list1.findIndex((todo)=>todo.id===item.id)
        newlist.splice(index,1);
        setList1(newlist)
    }else if(item.list==='list2'){

         const newlist=[...list2]
        const index=list2.findIndex((todo)=>todo.id===item.id)
        newlist.splice(index,1);
        setList2(newlist)
    }
    const newl=[...todo]
    const index1=newl.findIndex((todo)=>todo.id===item.id)
        newl.splice(index1,1);
        setTodo(newl)

}

const handleEditList=(e,item)=>{
    e.preventDefault()
}



  return (
    <>
    <div class="header">
        <form onSubmit={handleSubmit} className='form' >
            <input type="text" name="name" placeholder='task name' value={data.name}  required onChange={handleChange} />
            <input type="text" name="description" placeholder='tast description' value={data.description} required onChange={handleChange}  />
            <select  onChange={handleChange} name="list"   >
                <option selected  disabled>select list</option>
                <option value="list1">List1</option>
                <option value="list2" >List2</option>
              
            </select>
    

        <button className='btn' type='submit' >Create List</button>
 
        </form>
    </div>

    <div >
    {/* <form onSubmit={handleEditSubmit}>
    <table>
    <tr>
                <th>Title</th>
                <th>description</th>
                <th>list</th>
                <th>Actions</th>
            </tr>
            <tbody>
            
            {
                todo?.map((item,k)=>(
                    <>
                    {edit=== item.id?(<Edit  editdata={editdata} handleDataEdit={handleDataEdit}  handleCancel={handleCancel} />):
                    ( 
                        
                        
                        <List item={item} handleEdit={handleEdit} handleDelete={handleDelete} />)}
                        
                        </>
                        )
                        )
                        
                    }
                    </tbody>
                    </table>
                </form> */}

    </div>

 <div className='flex'> 
<div>
        {list1.length>0 && (
    <form onSubmit={handleEditSubmit}>

       
    <table>
            <tr>
                <th>Title</th>
                <th>description</th>
                <th>list</th>
                <th>Actions</th>
            </tr>
            <tbody>

        {
            list1?.map((item,k)=>(
                <>
              {editId=== item.id?(<Edit  editdata={editdata} handleDataEdit={handleDataEdit}  handleCancel={handleCancel} />):
            ( 

           
           <List item={item} handleEdit={handleEdit} handleDelete={handleDelete}  />)}
       
                </>
            )
            )
            
        }
        </tbody>
</table>
        </form>
 )}
</div>


<div>
    {list2.length>0 &&
    (

   
<form onSubmit={handleEditSubmit}>
    <table>
            <tr>
                <th>Title</th>
                <th>description</th>
                <th>list</th>
                <th>Actions</th>
            </tr>
            <tbody>

        {
            list2?.map((item,k)=>(
                <>
              {editId=== item.id?(<Edit  editdata={editdata} handleDataEdit={handleDataEdit}  handleCancel={handleCancel} />):
            ( 

           
           <List item={item} handleEdit={handleEdit} handleDelete={handleDelete} handleEditList={handleEditList} />)}
       
                </>
            )
            )
            
        }
        </tbody>
</table>
       
        </form>
         )}
</div>
</div> 

<div>
          

                {
                    todo.length>0 &&(

                        <Export todo={todo}/>
                    )
                }
      
               
</div>
    </>


  )
}

export default Task
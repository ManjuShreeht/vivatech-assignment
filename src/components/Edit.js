import React, { useState } from 'react'

const Edit = ({editdata,handleDataEdit,handleCancel}) => {

    console.log(editdata)

  return (
   <tr>
       <td> <input type="text" name="name" placeholder='task name' value={editdata.name}   onChange={handleDataEdit} /></td>
            <td> <input type="text" name="description" placeholder='tast description' value={editdata.description} r onChange={handleDataEdit}  /></td>
            <td> <select  onChange={handleDataEdit} name="list" value={editdata.list}  >
               
                <option value="list1">List1</option>
                <option value="list2" >List2</option>
               
            </select></td>
            <td className='empty'>
                <button type='submit' className='btn1'>Save</button>
                <button type='button' className='btn2' onClick={handleCancel}>Cancel</button>
            </td>
   </tr>
  )
}

export default Edit
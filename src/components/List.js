import React from 'react'

const List = ({item,handleEdit,handleDelete}) => {
  return (
    <tr className='tr'>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.list}</td>
            <td>
            <tr className='empty'>

            <td><button type='button' className='btn1' onClick={(e)=>handleEdit(e,item)}>edit</button></td>
            <td><button type='button' className='btn2' onClick={(e)=>handleDelete(item)}>delete</button></td>
            </tr>
            </td>
            
        
        </tr>
  )
}

export default List

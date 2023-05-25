import React from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const Export = ({todo}) => {
  return (
    <div className='export'>
        <h3>Export data to EXcel</h3>
    <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button btn btun"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"/>
    <table id="table-to-xls" className='table'>
        <tr>
            <th>name</th>
            <th>Description</th>
            <th>list</th>
        </tr>
        <tr>
            {
                todo.map((todo)=>(
                    <div className='flex11' >
                    <td>{todo.name}</td>
                <td>{todo.description}</td>
                <td>{todo.list}</td>
                    </div>
                )
                )

            }
        </tr>
        <tr>
          
        </tr>
    </table>

</div>
  )
}

export default Export
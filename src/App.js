import { useEffect, useState } from 'react';
import './App.css';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
function App() {
  const [data, setData]= useState([]);

  const getData=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(res => setData( res));
  }
  useEffect(() => {
    getData()
  }, [getData])
  return (
    <div className="container">
    <h3 className="mt-3 text-success"><center>Export React Table Data into EXCEL Sheet</center></h3>
    <div className="row mt-4">
    <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button btn btn-success mb-3"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Export Data to Excel Sheet"/>
       <table className="table" id="table-to-xls">
        <thead className="thead-dark">
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Website</th>
        </tr>
        </thead>
        <tbody>
       
             {data.map((res)=>
                <tr>
                <td>{res.name}</td>
                <td>{res.username}</td>
                <td>{res.email}</td>
                <td>{res.website}</td>
                </tr>
              )}   
           
        </tbody>   
    </table>
 </div>
</div>
  );
}

export default App;

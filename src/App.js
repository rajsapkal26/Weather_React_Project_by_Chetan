
// import {useState} from "react"
import Tenpapp from "./Components/Tenpapp";
// import axios from 'axios';
import './App.css';
 function App() {

 
  // const[comment,setComment]=useState([])
  //  const getData= () => {
  //   const options={
  //     method:"get",
  //     url: "https://jsonplaceholder.typicode.com/comments"
  //   };
  //   axios(options).then(function(response){
  //     setComment(response.data)
  //   }).catch((error)=>{
  //     console.log(error)
  //   });
  //  }


   
   
  //   <>
  //    <div className="container">
  //     <button className="btn btn-danger p-2 rounded-0" onClick={getData}>Click</button>

  //     <table className="table table-bordered border-hover">
  //        <tr>
  //          <th>Name</th>
  //          <th>Email</th>
  //        </tr>
  //        {
  //         comment.map((c,key)=>{
  //           return(
  //            <tr Key={key}>
  //             <td>{c.name}</td>
  //             <td>{c.email}</td>
  //            </tr>
  //           )
  //         })
  //        }
  //     </table>
  //    </div>
  //   </>
  //  );
  return (
  <>
  <Tenpapp/>
  </>
   )
 }

 export default App;

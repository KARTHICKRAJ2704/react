  import { useEffect, useState } from 'react';
// import './App.css'
import axios from 'axios';
import { API } from './api';
import Contacts from './Contact';
import { useNavigate } from 'react-router-dom';
    export default function Submits(){
        const [name,setname]=useState('')

        const j = (e)=>{
                e.preventDefault();
                console.log(name);
//post
            axios.post('https://645b328ea8f9e4d6e761f7fe.mockapi.io/api',{Name:name})

               setname('')
        }

        //get
        const [name1,setname1] = useState([]);

            useEffect(()=>{  axios.get('https://645b328ea8f9e4d6e761f7fe.mockapi.io/api').then((jq)=>{
                console.log(jq.data);
                setname1(jq.data)
})},[])


// delete
const del = (a)=>{
        axios.delete(`${API}/${a}`).then(()=>{
            axios.get('https://645b328ea8f9e4d6e761f7fe.mockapi.io/api').then((jq)=>{
                console.log(jq.data);
                setname1(jq.data)
})
        })
}



const navi = useNavigate();

const home = ()=>{
    navi('/')
}
    return(
      <>
        <form onSubmit={j}>
             <input type="text" value={name} onChange={(e)=>setname(e.target.value)}></input> 
             <input type="submit" value={'save'}></input> 
             
        </form>   

        <center><button onClick={home}>HOME</button></center>



        <table border={'2px'}>

            {name1.map((r)=>(
                <tr>
            <td>{r.Name}</td>
            <td><button onClick={()=>del(r.id)}>delete</button></td>
            <td><button onClick={()=>del(r)}>delete</button></td>

                </tr>
            ))}



        </table>
      
      
      
      </>  
    )
}

import {useState} from "react";
import './App.css'
import axios from 'axios';
    export default function Submits(){
        const [name,setname]=useState('')
//post
        const j = (e)=>{
                e.preventDefault();
                console.log(name);

            axios.post('https://645b328ea8f9e4d6e761f7fe.mockapi.io/api',{Name:name})
            setname('')
        }

        //get
        

      

    return(
        <form onSubmit={j}>
            <video auto muted src="C:\Users\91989\Downloads">
             <input type="text" value={name} onChange={(e)=>setname(e.target.value)}></input> 
             <input type="submit"></input> 
             </video>
             
        </form>     
    )
}
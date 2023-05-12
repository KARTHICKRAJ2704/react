import { useNavigate } from "react-router-dom"
import './App.css'



export default function Contacts(){

//     const navi = useNavigate()
//         const h = ()=>{
//                     navi('/create')
//         }
//         const h1 = ()=>{
//             navi('/create')
// }


    return(
        <form action="">
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input><br></br>

            <input type="text" placeholder="Company"></input>
            <input type="text" placeholder="Job Title"></input><br></br>

            <input type="text" placeholder="e-mail"></input><br></br>

            <input type="text" className="space d-flex" placeholder="country">
                </input><input type="text"></input><br></br>

            <input type="text" className="" placeholder=""></input>

            <input type="text" className="" placeholder=""></input>    
            



        </form>
    )
}

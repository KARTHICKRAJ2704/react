
import React, { useState } from "react";
// import Btntask from "./btntask";
import Submits from "./Submit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crudq from "./crud";
import Contacts from "./Contact";
// import './App.css'


function App(){
  // const [value, setValue] = useState('');
return(


    // <div className="container">
    //   <div className="calculator">
    //     <form action="">
    //       <div className="display">
    //         <input type="text" value={value} />
    //       </div>
    //       <div>
    //         <input type="button" value="AC"onClick={e => setValue('')}/>
    //         <input type="button" value="DE"onClick={e => setValue(value .slice(0, -1))}/>
    //         <input type="button" value="."onClick={e => setValue(value + e.target.value)}/>
    //         <input type="button" value="/"onClick={e => setValue(value + e.target.value)}/>
    //       </div>
    //       <div>
    //         <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
    //         <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
    //         <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
    //         <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
    //       </div>
    //       <div>
    //         <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
    //         <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
    //         <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
    //         <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
    //       </div>
    //       <div>
    //         <input type="button" value="1"onClick={e => setValue(value + e.target.value)}/>
    //         <input type="button" value="2"onClick={e => setValue(value + e.target.value)}/>
    //         <input type="button" value="3"onClick={e => setValue(value + e.target.value)}/>
    //         <input type="button" value="+"onClick={e => setValue(value + e.target.value)}/>
    //       </div>
    //       <div>
    //         <input type="button" value="."onClick={e => setValue(value + e.target.value)}/>
    //         <input type="button" value="0"onClick={e => setValue(value + e.target.value)}/>
    //         <input type="button" value="=" className='equal' onClick={e => setValue(eval(value))}/>
    //       </div>
    //     </form>
    //   </div>
    //   <input type="button" value="karthick" className="btn btn-primary" />
    

     
    //    </div>
    <>
    {/* <Submits></Submits> */}
    {/* <Btntask></Btntask> */}


      <BrowserRouter>
      <Routes>


        <Route path="/" element={<Crudq></Crudq>} />

        <Route  path="/create"   element={<Submits></Submits>}/>
        <Route path="/" element={<Contacts></Contacts>}/>
      </Routes>
      
      
      </BrowserRouter>



    </>

)
}
export default App;
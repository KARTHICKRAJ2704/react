import React, {useState} from "react"

const Buttontask = () =>{
    const [changecolor, setchangecolor] = useState('#000')
  
  const handleclick = () =>{
    const colors = '#' + Math.random().toString(16).slice(2,8)
    setchangecolor(randomcolors)
  }
  console.log('color', changecolor)


return(
<React.Fragment>
<section>

<div className="karthick">
      <button 
      style={{backgroundColor : `${changecolor}`}}
      onClick={handleclick}>color change</button>
      </div>
    </section></React.Fragment>

)
}


export default Buttontask
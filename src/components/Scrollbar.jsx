import React from 'react'
import './Scrollbar.scss'

const Scrollbar = () => {
    const arr = [1,2,3,4,5,6]
  return (
    <div className="Scrollbar">

        {arr.map((don) => (
            <img key={don} id={`do-${String(don)}`} src="/Doughnuts/doughnut_1f369.png" alt =""/>
        ))}
        
    </div>
  )
}

export default Scrollbar
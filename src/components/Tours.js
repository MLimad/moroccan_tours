import React from 'react'
import Tour from './Tour'


function Tours(props) {

  return (
    <div>
        <Tour data={props.data} removeCity={props.removeCity} />
    </div>
  )
}



export default  Tours


// <Tour city={"Tanger City"} image={"./images/tanger.jpg"} price={"500$"}/>
//         <Tour city={"Chefchaoun"} image={"./images/chaoun.jpg"} price={"350$"}/>
//         <Tour city={"Marrakech"} image={"./images/kech.jpg"} price={"900$"}/>
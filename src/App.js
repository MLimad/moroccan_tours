import React, { useState } from 'react'
import './App.css';
import Tours from './components/Tours';
import cities from './cities'


function App() {

  const [data,setData] = useState(cities);
  

 function removeCity(id) {
  const newArray = [...data];
  newArray.splice(id,1);
  setData(newArray);
}



  
  
  return (
    <div className="container">
      <header>
          <h1>Moroccan Tours</h1>
          <div className="line"></div>
      </header>
      
        <Tours  data={data}  removeCity={removeCity}/>
    </div>
  );
}

export default App;

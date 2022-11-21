import React from 'react'
import AddFood from './AddFood'
import TrackFood from './TrackFood'
import { useState } from 'react'


const Main = () => {
  const [foodList, setFoodList] = useState([{ id: 1 , name: "Chicken", calories: 200, protein: 18 }, { id: 2, name: "Rice", calories: 110, protein: 4 }])
  return (
    <>
      <nav className="nav"> <h3>Tracker</h3> </nav>
      <div className='main'>
        <div className="App-header" >
          <AddFood foodList={foodList} setFoodList={setFoodList}/>
        </div>
        <TrackFood foodList={foodList} setFoodList={setFoodList}/>
      </div>
    </>
  )
}

export default Main

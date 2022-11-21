import React, { useEffect } from "react"
import { useTransition, animated } from "react-spring"
import { useState } from "react"
import { Button } from "react-bootstrap"

let calories = 0
let protein = 0
let proteinhgt = 0
let calorieshgt = 0
let caloriesdhgt = 0

const TrackFood = ({ foodList, setFoodList }) => {

    const addMacros = (list) => {
        calories = 0
        protein = 0
        proteinhgt = 0
        calorieshgt = 0
        caloriesdhgt = 0

        for (const food of list) {
            calories += food.calories
            protein += food.protein
        }
        proteinhgt = protein * 20
        calorieshgt = calories
        caloriesdhgt = 1000 - calorieshgt
    }
    useEffect(() => {
        addMacros(foodList)
        
    },[foodList])

    const [macros, setMacros] = useState([])


    const transitions = useTransition(macros, {
        from: { opacity: 0, x:0, y: 800, width: 200},
        enter: item => async (next) => {
            await next({  opacity: 1, x: 0, y: 0, delay: item.delay, height:150  }).then();
            await next({ width: item.width, height: 150});
        },
        leave: { x: 0, y: 800, opacity: 0 }
    })

    return (
        <div className="macros">
            <Button onClick={() => {
                setMacros(v => v.length ? [] : [
                    { x: 0, y: 200, delay: 200, width: proteinhgt, name: "Protein", macro:protein},
                    { x: 0, y: 100, delay: 400, width: calorieshgt, name: "Calories", macro: calories},
                    { x: 0, y: 0, delay: 600, width: caloriesdhgt, name: "Deficit", macro: (2000 - calories)}
                ])
            }} className="seeMacros">See Macros</Button>
            <div className="container">
                <div className="wall">
                {transitions((style, item) => {
                    console.log(item)
                    return item ? <animated.div style={style} className="macro"><h5>{item.name}: {item.macro} {item.macro === protein ? "g" : ""}</h5></animated.div> : ""
                })}
                </div>
            </div>
        </div>
    )
}

export default TrackFood
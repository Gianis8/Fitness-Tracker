import React from "react";
import FoodCard from "./FoodCard";
import { useTransition, animated } from "react-spring";



const FoodTracker = ({ list }) => {
    

    const transition = useTransition(list, {
        from: { 
            opacity: 0, 
            marginLeft: -100, 
            marginRight: 100 
        },
        enter: { 
            opacity: 1,
             marginLeft: 0, 
             marginRight: 0 }
    })

    
    return (
        <div>
            {transition((style, item) => {
                console.log(item)
                return (
                    <animated.div style={style}>
                        <FoodCard food={item} />
                    </animated.div>
                )
            })}
        </div>
    )
}

export default FoodTracker
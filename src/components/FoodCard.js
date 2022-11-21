import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'


const FoodCard = ({food}) => {
    return (
        <Card style={{color: "black",width:"30vw", margin:".25in"}}>
            <Card.Body>
            <Card.Title>{food.name}</Card.Title>
            <Card.Text>Calories:{food.calories}</Card.Text>
            <Card.Text>Protein:{food.protein}g</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default FoodCard
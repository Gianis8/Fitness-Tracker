import React from "react"
import { useState } from "react"
import FoodTracker from "./FoodTracker"
import { Button, Form } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


const AddFood = ({foodList, setFoodList}) => {

   
    const [food, setFood] = useState(
        {
            name: '',
            calories: '',
            protein: ''
        }
    )
    let count = 3

    const handleSubmit = (e) => {
        e.preventDefault()
        const arr = foodList
        arr.push(food)
        setFoodList(arr)
        setFood({
            id: count,
            name: '',
            calories: '',
            protein: '',
        })
        console.log(foodList)
        count++
    }

    const handleChange = (e) => {
        e.preventDefault()
        let value = e.target.value
        let key = e.target.id
        setFood((oldValue) => {
            return {
                ...oldValue,
                [key]: value
            }
        })

    }

    return (
        <div className="addFood">
            <Form id="form" onSubmit={e => { handleSubmit(e) }}>
                <Form.Group>
                    <Form.Label htmlFor="name">Name:</Form.Label>
                    <Form.Control type="text" id="name" value={food.name} onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="calories">Calories:</Form.Label>
                    <Form.Control type="text" id="calories" value={food.calories} onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="protein">Protein:</Form.Label>
                    <Form.Control type="text" id="protein" value={food.protein} onChange={handleChange}></Form.Control>
                </Form.Group>
                <Button className="mt-2"type="submit">Submit</Button>
            </Form>
            <FoodTracker list={foodList}></FoodTracker>
        </div>
    )
}

export default AddFood
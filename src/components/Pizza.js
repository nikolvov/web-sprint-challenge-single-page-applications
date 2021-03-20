import React from 'react';

import { useHistory } from 'react-router-dom'

function Pizza(props) {

 // console.log(props)
    return (
        <article>
            <h3>{props.pizza.name}</h3>
            <p>{props.pizza.size}</p>
            <p>{props.pizza.toppings}</p>
            <p>{props.pizza.special}</p>
        </article>
    )
}

export default Pizza
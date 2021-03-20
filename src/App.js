import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios';

import Pizza from './components/Pizza'
import PizzaForm from './components/PizzaForm'

import { formSchema } from './components/validation/formSchema'

const initialFormValues = {
  // text inputs
  name: '',
  // dropdown
  size: '',
  // checkboxes
  Pepperoni: false,
  Olives: false,
  Feta: false,
  Peppers: false,
  // text input
  special: '' 
}

const initialFormErrors = {
  name: '',
  size: ''
}

const initialPizzas = []
const initialDisabled = true

const App = () => {
  const [pizzas, setPizzas] = useState(initialPizzas)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 

  const updateForm = (event) => {
    const { name, value, type, checked } = event.target
    const updatedInfo = type === 'checkbox' ? checked: value;
    setFormValues({...formValues, [name]: updatedInfo})
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(({errors}) => setFormErrors({...formErrors, [name]: errors[0]}))
  }

  const submitForm = (event) => {
    event.preventDefault()
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ['Pepperoni', 'Olives', 'Feta', 'Peppers'].filter(topping => formValues[topping]),
      special: formValues.special.trim()
    }
    axios.post('https://reqres.in/api/pizzas', newPizza)
    .then(res => {
      console.log(res.data)
      setPizzas([...pizzas, res.data])
      setFormValues(initialFormValues)
    })
  }

  // to see data
  // useEffect(() => {
  //   console.log(pizzas)
  // }, [pizzas])

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  })

  return (
    <div className='App'>
      <nav>
        <h1>Lambda Eats</h1>
        <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/pizza">Build Pizza</Link>
            <Link to="/order">My order</Link>
        </div>
      </nav>
      <h3>Pizza Builder</h3>

      <Switch>
        <Route exact path="/pizza">
          <PizzaForm 
            formValues={formValues}
            updateForm={updateForm}
            submitForm={submitForm}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path="/order"> 
        { pizzas.map(pizza => (<Pizza  key={pizza.id} pizza={pizza}/>))}
        </Route>
      </Switch>
    </div>
  );
};
export default App;

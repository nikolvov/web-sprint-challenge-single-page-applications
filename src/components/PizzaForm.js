import React from 'react';

export default function PizzaForm(props) {

    const { formValues, updateForm, submitForm, disabled, errors } = props

    return (
        <form className='form-container' onSubmit={submitForm}>
            <div className='form-group inputs'>
                <label>Name
                    <input 
                        type='text'
                        value={formValues.name}
                        placeholder='Name'
                        name='name' maxLength='30'
                        onChange={updateForm}
                    />
                </label>
                <label>Size
                    <select 
                        onChange={updateForm}
                        value={formValues.size}
                        name='size'
                    >
                        <option value=''>- Select a size -</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
            </div>
            <div className='form-group checkboxes'>
                <h4>Toppings</h4>
                <div>
                <label>Pepperoni
                    <input type='checkbox' name='Pepperoni' onChange={updateForm} checked={formValues.pepperoni} />
                </label>
                </div>
                <div>
                    <label>Olives
                        <input type='checkbox' name='Olives' onChange={updateForm} checked={formValues.olives} />
                    </label>
                </div>
                <div>
                    <label>Feta
                        <input type='checkbox' name='Feta' onChange={updateForm} checked={formValues.feta} />
                    </label>
                </div>
                <div>
                <label>Peppers
                        <input type='checkbox' name='Peppers' onChange={updateForm} checked={formValues.peppers} />
                    </label>
                </div>
            </div>
            <div className='form-group special'>
                <h4>Special Instructions</h4>
                <label>
                    <input
                        type='text'
                        value={formValues.special}
                        placeholder='Special Instructions'
                        name='special' maxLength='100'
                        onChange={updateForm}
                    />
                </label>
            </div>
            <div className='form-group submit'>
                <h3>Add to Order</h3>

                <button disabled={disabled}>submit</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </div>
        </form>
    )
}
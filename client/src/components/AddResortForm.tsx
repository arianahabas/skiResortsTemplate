import React, { useState } from 'react'
import { StyledError, StyledForm, StyledInput, StyledButton, StyledFormWrapper } from '../styles/styles'
import { useMutation } from 'react-apollo';
import { CREATE_RESORT_MUTATION } from '../graphql/mutations';

const AddResortForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    elevation: '',
    length: '',
    lifts: '',
    ticket_price: ''
  });
  const [error, setError] = useState('');

 
  const [createResort] = useMutation(CREATE_RESORT_MUTATION, {
    variables: {
      name: formState.name,
      elevation: formState.elevation,
      length: formState.length,
      lifts: formState.lifts,
      ticket_price: formState.ticket_price,
    }
  })

  const handleChange = (e: any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
    })
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();

    for (let key in formState) {
      // @ts-ignore
      if (formState[key] === '') {
        setError(`You must provide the ${key}`)
        return
      }
    }
    setError('');
    createResort()
    setFormState({
      name: '',
      elevation: '',
      length: '',
      lifts: '',
      ticket_price: ''
    })
  };

 

  return (
    <StyledFormWrapper>
      
  
      <StyledForm
        onSubmit={handleSubmit}
      >
        <h2>Add Resort</h2>
        <div >
          <StyledInput
            name='name'
            value={formState.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
          />
          <StyledInput
            name='elevation'
            value={formState.elevation}
            onChange={handleChange}
            type="number"
            placeholder="Elevation"
          />
          <StyledInput
            name='length'
            value={formState.length}
            onChange={handleChange}
            type="number"
            placeholder="Length"
          />
          <StyledInput
            name='lifts'
            value={formState.lifts}
            onChange={handleChange}
            type="number"
            placeholder="Lifts"
          />
          <StyledInput
            name='ticket_price'
            value={formState.ticket_price}
            onChange={handleChange}
            type="number"
            placeholder="Ticket Price"
          />
        </div>
        {error && (
          <StyledError>
            <p>{error}</p>
          </StyledError>
        )}
        <StyledButton type="submit" >Submit</StyledButton>
      </StyledForm>

    </StyledFormWrapper>
  );
}

export default AddResortForm
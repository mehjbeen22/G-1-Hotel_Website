import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function BookingForm() {
  return (
    <FormContainer>
      <FormTitle>Book Your Stay</FormTitle>
      <FormGroup>
        <FormLabel htmlFor="name">Full Name:</FormLabel>
        <FormInput type="text" id="name" placeholder="Enter your Name..." required />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="email">E-Mail:</FormLabel>
        <FormInput type="email" id="email" placeholder="name@gmail.com" required />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="phone">Phone Number:</FormLabel>
        <FormInput type="tel" id="phone" placeholder="Enter your number..." />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="specialRequest">Special Request:</FormLabel>
        <FormTextarea
          id="specialRequest"
          name="specialRequest"
          placeholder="Any special requests..."
          rows="4"
        ></FormTextarea>
      </FormGroup>
      <FormButton type="submit">Submit</FormButton>
    </FormContainer>
  );
}

export default BookingForm;

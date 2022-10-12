import React, { useState } from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


const Add = ({ onSubmit }) => {

  const initialState = {
    id: 0,
    description: '',
    completed: false,
  }

  const [formValues, changeFormValues] = useState({...initialState});

  const handleChange = (event) => {
    console.log(event.target.checked)
    const newState = { ...formValues };
    if (event.target.name === "completed") {
      newState[event.target.name] = event.target.checked; 
    } else {
      newState[event.target.name] = event.target.value;
    }
    changeFormValues(newState);
    console.log(newState);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    onSubmit(formValues.id, formValues.description, formValues.completed)
    changeFormValues({...initialState});
  }

  return (
    <div>
      <Form onSubmit={(event) => submitHandler(event)}>
        <Form.Group controlId="taskID">
          <Form.Label> Task ID</Form.Label>
          <Form.Control
            name="id"
            type="number"
            value={formValues.id}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="taskDescription">
          <Form.Label> Description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            value={formValues.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="completed">
          <Form.Check
            type="checkbox"
            name="completed"
            id="completed"
            label="Completed?"
            checked={formValues.completed}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );

};
export default Add;

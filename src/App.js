import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import View from './View'
import Add from './Add';

const App = () => {
  const [todos, changeTodos] = useState([
    { id: 1, task: "make static data", completed: false },
    { id: 2, task: "make dynamic data", completed: false },
  ]);

  const updatedTodoItems = (id, description, completed) => {
    const item = { id, task: description, completed }
    changeTodos([...todos, item]);
  }

  return (
    <Container>
      <View todos={todos} />
      <Add onSubmit={(id, description, completed) => updatedTodoItems(id, description, completed)}/>
    </Container>
  );
}

export default App;

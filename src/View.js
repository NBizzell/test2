import Table from 'react-bootstrap/Table';
import './App.css';

function View({ todos }) {
  
  const buildRows = () => {
    return todos.map((current) => (
      <tr key={current.id}>
        <td>
          {current.id}
        </td>
        <td>
          {current.task}
        </td>
        <td>
          {current.completed ? "yes" : "no"}
        </td>
      </tr>
    ));
  }


  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>complete</th>
          </tr>
        </thead>
        <tbody>
          {buildRows()}
        </tbody>
      </Table>
    </>
  );

}
export default View;

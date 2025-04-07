import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "bootstrap/dist/css/bootstrap.min.css";

export default function App(){
  return(
    <div className="d-flex flex-direction flex-column mx-5" style={{width: "30%"}}>
      <h1 className="text-center">Todo List</h1>
      <input type="text"/>
      <Button variant="secondary">Add</Button>
    </div>
  )
}
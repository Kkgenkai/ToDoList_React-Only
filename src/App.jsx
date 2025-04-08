import { useState } from 'react';
import List from './components/List';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function App(){
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) =>{
    const {value} = e.target; 
    setItem(value);
  }

  function handleClick(e){
    setList(prevValue => [...prevValue, item]);
  }

  function deleteItem(i){
    const nValues = list.filter((e, index) => i !== index);
    setList(nValues);
}


  return(
    <div className="holder d-flex flex-direction flex-column mx-5" style={{width: "30%"}}>
      <h1 className="text-center">Todo List</h1>
      <FloatingLabel
        controlId="floatingInput"
        label="Todo"
      >
        <Form.Control className='todoInput' type="text" placeholder='buy milk' onChange={handleChange} value={item}/>
      </FloatingLabel>
      <Button className='addItem btn-outline-light' onClick={handleClick}>Add Item</Button>
      <List className='list' list={list} deleteItem={deleteItem}/>
    </div>
  )
}
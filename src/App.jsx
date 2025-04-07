import { useState } from 'react';
import List from './components/List';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

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
      <input type="text" onChange={handleChange} value={item}/>
      <Button variant="secondary" onClick={handleClick}>Add Item</Button>
      <List list={list} deleteItem={deleteItem}/>
    </div>
  )
}
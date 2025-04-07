import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

export default function App(){
  const [item, setItem] = useState("");
  const [lists, setLists] = useState([]);

  const handleChange = (e) =>{
    const {value} = e.target; 
    setItem(value);
  }

  function handleClick(e){
    setLists(prevValue => [...prevValue, item]);
  }

  function list_Items(){
    return lists.map((e, i) => <li onClick={() => {
      const nValues = lists.filter((e, index) => i !== index);
      setLists(nValues);
    }}>{e}</li>)
  }


  return(
    <div className="d-flex flex-direction flex-column mx-5" style={{width: "30%"}}>
      <h1 className="text-center">Todo List</h1>
      <input type="text" onChange={handleChange} value={item}/>
      <Button variant="secondary" onClick={handleClick}>Add</Button>
      {list_Items()}
    </div>
  )
}
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';
import ListGroup from 'react-bootstrap/ListGroup';

export default function List({list, deleteItem}){
    
    function list_Items(){
        return list.map((e, i) => <ListGroup as="ul"><Item key={uuidv4()} onClick={()=> {deleteItem(i)}} todo={e}/></ListGroup>)
    }

    return(
    <div className='list'>
        {list_Items()}
    </div>);
}
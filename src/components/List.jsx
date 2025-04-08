import { v4 as uuidv4 } from 'uuid';
import Item from './Item';

export default function List({list, deleteItem}){
    
    function list_Items(){
        return list.map((e, i) => <Item key={uuidv4()} remove={()=> {deleteItem(i)}} todo={e}/>)
    }

    return(
    <div className='list'>
        {list_Items()}
    </div>);
}
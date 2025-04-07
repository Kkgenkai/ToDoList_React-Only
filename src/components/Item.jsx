export default function Item({onClick, todo}){
    return(<li onClick={onClick}>{todo}</li>);
}
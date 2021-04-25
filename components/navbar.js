import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';


function NavBar() {
  const [clicks, setClicks] = React.useState([]);
  console.log('clicks:',clicks)
  const handleClick = (e)=>{
    setClicks([...clicks, e.target.innerHTML]);
  }
const buttonItems = [1,2,3,4,5];
const updateList =
  buttonItems.map((number,i)=>{
    return <Button key = {i} onClick = {handleClick}>{number}</Button>
  });

  return (
    <div className="navBar">
    <div>{updateList}</div>
    </div>
  );
}

export default NavBar;
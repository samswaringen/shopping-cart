import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/shoppingcart';


function App() {
  const menuItems = [
    {name:'apple', instock: 2},
    {name:'pineapple', instock: 3},
    {name:'pear', instock: 0},
    {name:'peach', instock: 3},
    {name:'orange', instock: 1},
]
const [fruits , setFruits] = React.useState(menuItems);

  return (
    <div >
    <ShoppingCart menuitems = {fruits} minstock = {0} />
    </div>
  );
}

export default App;
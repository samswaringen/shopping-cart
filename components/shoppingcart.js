import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';



function App() {
    const menuItems = [
      {name:'apple', instock: 2},
      {name:'pineapple', instock: 3},
      {name:'pear', instock: 2},
      {name:'peach', instock: 3},
      {name:'orange', instock: 1},
    ]
    const [fruits , setFruits] = React.useState(menuItems);
    const [cart, setCart] = React.useState([]);
    const handleClick = (e, i)=>{
        let [ fruit, newStock ] = e.target.innerHTML.split(':');
        newStock --;
        fruits[i].instock = newStock;
        setFruits([...fruits]);
        setCart([...cart,fruit]);
    }
    const handleReturn = (e,i)=>{
        let fruit = e.target.innerHTML;
        fruits.filter((item)=>{
            if(item.name === fruit){
                item.instock ++;
            }
        });
        cart.splice(i,1);
        setCart([...cart]);
        setFruits([...fruits]);
    }
    const updatedList = fruits.map((item, i)=>{
        if (item.instock === 0){
            return <Button key={i}>{item.name}: {item.instock}</Button>
        }else{
            return <Button key={i} onClick ={(e)=>handleClick(e, i)}>{item.name}: {item.instock}</Button>
        }
      });
    const updatedCart = cart.map((item,i) =>{
          return (
              <Button key = {i} onClick={(e)=>{handleReturn(e,i)}}>{item}</Button>
          )
      });
  
    return (
        <div id = 'shopping'>
        <div>
            <div>Available Fruits</div>
            {updatedList}
        </div>
        <div>
            <div>Shopping Cart</div>
            {updatedCart}
        </div>
    </div>
    );
  }
  
  export default App;

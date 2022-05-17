import React from 'react';
import classes from './Product.module.css';
export default function Product(){
  return (
    <div className={classes.product}>
        <h3>these are the  products!!!</h3><br/>
        <h5>1. Whey Protein</h5>
        <br/>
        <img src="https://sharksupplements.com/wp-content/uploads/2018/07/81ilyHPxxML._AC_SL1500_.jpg" alt=" not found" height="400px" width="500px"/>
        <br/><br/><br/>

        <h5>2. Peanut Butter</h5>
        <img src="https://th.bing.com/th/id/OIP.atJg49Y-TqvBwBa2KtG8kAHaJ3?pid=ImgDet&rs=1" alt="not available" height="400px" width="300px"/>
        <br/><br/>

        
    </div> 
  )
};

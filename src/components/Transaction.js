import React ,{useContext}  from 'react';
import '../App.css'; 
import { GlobalContext } from '../context/Globalstate';
 export const Transaction =( { transaction})=>
 {
const {deletetrans }=useContext(GlobalContext)
   console.log(deletetrans);
   console.log(transaction);
  // const sign=transaction.amount>0?'+':'-';
     return (

            <li className= {transaction.amount<0? 'minus': ' plus'}> 
          <span class="reason"> {transaction.text} </span>  <span class="amount">  { (transaction.amount)}Rs.</span>       
            <button onClick={()=> deletetrans(transaction._id)} > Close 
            </button>
          </li> 
     )
 }
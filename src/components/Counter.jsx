import React,{useState} from 'react'
import { toast } from 'react-toastify';

const Counter = () => {    
    const [counter,setCounter]=useState(0);
    const add=()=>{
        if(counter<10){
            setCounter(counter+1)
        }
        else{
            toast.warning("You cannot add more than 10 products")
        }
    }
    const subtract=()=>{
        if(counter>0){
            setCounter(counter-1)
        }
        else{
            toast.warning("You cannot have less than 0 items")
        }
    }
  return (
    <div className='d-flex gap-3'>
        <button className='btn btn-danger' onClick={subtract}>-</button>
        <h1>{counter}</h1>
        <button className='btn btn-primary'  onClick={add}>+</button>
        </div>
  )
}

export default Counter
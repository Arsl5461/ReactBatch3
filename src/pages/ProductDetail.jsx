import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Counter from '../components/Counter';
import Button from 'react-bootstrap/esm/Button';


const ProductDetail = () => {
    const [product,setProduct]=useState({})
    const params=useParams();
    const fetchProduct=async()=>{
const response=await fetch(`https://fakestoreapi.com/products/${params.id}`)
const data=await response.json();
setProduct(data)
    }
    useEffect(()=>{
        fetchProduct()
    },[])
  return (
<div className="container">
    <div className="row">
        <div className="col-6">
            <img src={product.image} height={"400px"}  width={"400px"}/>
        </div>
        <div className="col-6">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h3>{product.category}</h3>
            <Counter/>
            <Button className="btn btn-primary mt-4">Add To Cart</Button>
        </div>

    </div>
</div>
  )
}

export default ProductDetail
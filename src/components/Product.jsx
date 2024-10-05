import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Loader from './Loader';
import { Link } from 'react-router-dom';

const Product = () => {
  const [products,setProducts]=useState([]);
  const [loader,setLoader]=useState(false)
  const url ='https://fakestoreapi.com/products';
  const fetchData=async()=>{
    setLoader(true)
    const response=await fetch(url)
    const data=await response.json();
    setProducts(data)
    setLoader(false)
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <>
    {
      loader ? (<Loader/>):(
        <div className='d-flex flex-wrap justify-content-evenly gap-4 p-4'>
    {
      products.map((product)=>{
        return(
          <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} height={"200px"} width={"100px"} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
       {product.category}
        </Card.Text>
        <Link to={`/products/${product.id}`} variant="primary">{product.price}</Link>
      </Card.Body>
    </Card>
</>
        )
      })
    }
    </div>
      )
    }
    
    </>
  )
}

export default Product
import React from 'react'
import Product from '../components/Product'


const Home = () => {
  const data="category/electronics"
  return (
    <div><Product limit={data}/></div>
  )
}

export default Home
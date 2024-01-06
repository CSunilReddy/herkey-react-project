import React, { useEffect, useState } from 'react'
import CarouselComponent from '../../components/Carousel/CarouselComponent'
import {  getProductsLists, homePageCarouselList } from '../../constants/constant'
import CardComponent from '../../components/Card/CardComponent'

const Home = () => {
  const [productsList, setProductsList] = useState([])

  const getProductsList = async () => {
    const productsData = await getProductsLists();
    setProductsList(productsData)
  }
  useEffect(()=>{
    getProductsList();
  },[])

  return (
    <>
      <CarouselComponent slides= {homePageCarouselList}/>
      
      <div className='productsSection'>
        <h3>Products Section</h3>
        <CardComponent productsList = {productsList}/>
      </div>

    </>
  )
}
export default Home

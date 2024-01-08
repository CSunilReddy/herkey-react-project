import React, { useEffect, useState } from 'react'
import CarouselComponent from '../../components/Carousel/CarouselComponent'
import {  getProductsLists, homePageCarouselList } from '../../constants/constant'
import CardComponent from '../../components/Card/CardComponent'
import { Spinner } from 'reactstrap'

const Home = () => {
  const [productsList, setProductsList] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [isLoading,setLoading] = useState(true)

  const getProductsList = async () => {
    const productsData = await getProductsLists('limit=30');
    setProductsList(productsData)
    setHasMore(productsData.length == 30);
    setLoading(false)
  }
  const handleIntersection = async (entries) =>{
    if(entries[0].isIntersecting && hasMore){
      setLoading(true)
      const data = await getProductsLists('limit=30&skip='+productsList.length)
      setProductsList([...productsList,...data])
      setHasMore(data.length == 30)
      setLoading(false)
    }
  }
  useEffect(()=>{
    getProductsList();    
  },[])
  useEffect(()=>{     
    let observer = new IntersectionObserver(handleIntersection);
    const steps = document.querySelectorAll('.cardBlock');
    steps.forEach((step,index) => {
      index+1 == steps.length && observer.observe(step);
    });
  },[productsList])

  return (
    <>
      <CarouselComponent slides= {homePageCarouselList}/>
      
      <div className='productsSection' >
        <h3>Products Section</h3>
        <CardComponent productsList = {productsList}/>
        {isLoading && <div className='w-100 text-center'><Spinner color="primary" type="grow" className='text-center'/></div>}
      </div>

    </>
  )
}
export default Home

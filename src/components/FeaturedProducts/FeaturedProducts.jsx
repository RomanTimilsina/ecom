import React, { useEffect, useState } from 'react'
import './FeaturedProducts.scss'
import  Card  from '../Card/Card.jsx'
import axios from 'axios'
import useFetch from '../../hooks/useFetch'

const FeaturedProducts = ({type}) => {
  
  const {data, loading, error} = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  )

  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, itaque magni ipsa culpa quisquam nihil. Facilis ducimus sunt corrupti maiores hic. Porro consequuntur saepe id quia eius repellendus officiis maxime!</p>
      </div>
      <div className="bottom">
            {  error ? 'error' : (loading ? 'loading':
              (data.map((item) => (
                  
                  <Card item={item} key={item.id} />
                  
                  )))
              )
              
            }
      </div>
    </div>
  )
}

export default FeaturedProducts

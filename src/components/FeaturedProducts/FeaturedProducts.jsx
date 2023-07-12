import React, { useEffect, useState } from 'react'
import './FeaturedProducts.scss'
import  Card  from '../Card/Card.jsx'
import axios from 'axios'

const FeaturedProducts = ({type}) => {
  const [data, setData] = useState([])
  

  useEffect(() => {
    const fetchData = async (req, res) => {
      try{
        
        const res = await axios.get( process.env.REACT_APP_API_URL + '/products?populate=*',
        {
          headers:{
            Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
          }
          
        });
        
        setData(res.data.data)
        console.log(res.data.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[])

  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, itaque magni ipsa culpa quisquam nihil. Facilis ducimus sunt corrupti maiores hic. Porro consequuntur saepe id quia eius repellendus officiis maxime!</p>
      </div>
      <div className="bottom">
            {
              data.map((item) => (
                  <Card item={item} key={item.id} />
              ))
            }
      </div>
    </div>
  )
}

export default FeaturedProducts

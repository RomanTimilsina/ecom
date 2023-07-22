import React, { useState } from 'react'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import './Product.scss'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Product = () => {

  const id = useParams().id
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState('img')
 
  const { data, loading, error} = useFetch(
    `/products/${id}?populate=*`
  )

  console.log(id)
  console.log(process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url)


  return (
    <div className='product'>
      {
        loading ? 'Loading'
        :
        <>
        <div className="left">
        <div className="images">
            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url}
             alt="" 
             onClick={e => setSelectedImage('img')}
             />
            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} 
            alt="" 
            onClick={e => setSelectedImage('img2')} 
            />
        </div>
        <div className="mainImg">
        {<img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImage]?.data?.attributes?.url}
         alt="" 
         
         />}

        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, corrupti alias. Ab iure nam suscipit sequi sed aut cum nesciunt voluptatem, recusandae quidem repudiandae maxime, veniam corrupti at, laudantium numquam.</p>
        <div className="quantity">
          <button onClick={e => setQuantity(prev => prev === 1 ? prev = 1 : prev - 1)}>-</button>
          {quantity}
          <button onClick={e => setQuantity(prev =>  prev + 1)}>+</button>
        </div>
        <div className="add">
          <button className='link'>
          <AddShoppingCartIcon/> ADD TO CART
          </button>
        </div>
        <div className="link">
          <span>
            <FavoriteBorderIcon/> ADD TO WISHLIST
            </span>
            
            <span>
            <BalanceIcon/> ADD TO COMPARE
            </span>
            </div>
        </div>
        </>
        }
      </div>
  )
}

export default Product

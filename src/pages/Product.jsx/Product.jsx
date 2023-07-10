import React, { useState } from 'react'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import './Product.scss'

const Product = () => {

  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(1)
  const images = [
    'https://assets.burberry.com/is/image/Burberryltd/372C80E3-CC1E-46CD-A6D8-DB89EE09F784?$BBY_V2_SL_1x1$&wid=1500&hei=1500',
    'https://blankslatepatterns.com/cdn/shop/products/FiestaModeled_600x.jpg?v=1478279055',
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
            <img src={images[0]} alt="" onClick={e => setSelectedImage(0)}/>
            <img src={images[1]} alt="" onClick={e => setSelectedImage(1)} />
        </div>
        <div className="mainImg">
        <img src={images[selectedImage]} alt="" />

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
      </div>
  )
}

export default Product

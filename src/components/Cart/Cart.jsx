import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.scss'

const Cart = () => {
  const [total, setTotal] = useState(0)

  const data = [{
    id:1,
    img:'https://assets.burberry.com/is/image/Burberryltd/372C80E3-CC1E-46CD-A6D8-DB89EE09F784?$BBY_V2_SL_1x1$&wid=1500&hei=1500',
    img2:'https://blankslatepatterns.com/cdn/shop/products/FiestaModeled_600x.jpg?v=1478279055',
    isNew:true,
    desc:'asdfghjpoiuyt',
    title:'Skirt',
    oldPrice:12,
    price:19
  },
  {
    id:2,
    img:'https://assets.burberry.com/is/image/Burberryltd/372C80E3-CC1E-46CD-A6D8-DB89EE09F784?$BBY_V2_SL_1x1$&wid=1500&hei=1500',
    img2:'https://blankslatepatterns.com/cdn/shop/products/FiestaModeled_600x.jpg?v=1478279055',
    isNew:true,
    desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, corrupti alias. Ab iure nam suscipit sequi sed aut cum nesciunt voluptatem, recusandae quidem repudiandae maxime, veniam corrupti at, laudantium numquam.',
    title:'Skirt',
    oldPrice:12,
    price:19
  },
  {
    id:3,
    img:'https://assets.burberry.com/is/image/Burberryltd/372C80E3-CC1E-46CD-A6D8-DB89EE09F784?$BBY_V2_SL_1x1$&wid=1500&hei=1500',
    img2:'https://blankslatepatterns.com/cdn/shop/products/FiestaModeled_600x.jpg?v=1478279055',
    isNew:true,
    desc:'asdfghjpoiuyt',
    title:'Skirt',
    oldPrice:12,
    price:19
  }]

  var x = 0
  data.map((item) => {
    x = x + item.price
  })

  return (
    <div className='cart' >
      <h3>Products in your cart</h3>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          
          <div className="details">
          <h5>{item.title}</h5>
          <p>{item.desc.substring(0,100)}</p>
          <div className="price">1 x ${item.price}</div>
          
          </div>
          <DeleteIcon className='delete'/>
        </div>
      ))}
      <div className="checkout">
        Proceed to Checkout
      </div>
      <div className='total'>
        <span>Total:</span>
        <span>{x}</span>
        </div>
        <div className="reset">
          <span style={{color:'red'}}>Reset Cart</span>
        </div>
    </div>
  )
}

export default Cart





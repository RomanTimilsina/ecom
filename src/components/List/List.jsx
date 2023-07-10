import Card from '../Card/Card.jsx';
import React from 'react'
import './List.scss'

const List = () => {
  const data = [{
    id:1,
    img:'https://assets.burberry.com/is/image/Burberryltd/372C80E3-CC1E-46CD-A6D8-DB89EE09F784?$BBY_V2_SL_1x1$&wid=1500&hei=1500',
    img2:'https://blankslatepatterns.com/cdn/shop/products/FiestaModeled_600x.jpg?v=1478279055',
    isNew:true,
    title:'Skirt',
    oldPrice:12,
    price:19
  },
  {
    id:2,
    img:'https://assets.burberry.com/is/image/Burberryltd/372C80E3-CC1E-46CD-A6D8-DB89EE09F784?$BBY_V2_SL_1x1$&wid=1500&hei=1500',
    isNew:true,
    title:'Skirt',
    oldPrice:12,
    price:19
  },
  {
    id:3,
    img:'https://assets.burberry.com/is/image/Burberryltd/372C80E3-CC1E-46CD-A6D8-DB89EE09F784?$BBY_V2_SL_1x1$&wid=1500&hei=1500',
    title:'Skirt',
    oldPrice:12,
    price:19
  },
  {
    id:4,
    img:'https://assets.burberry.com/is/image/Burberryltd/372C80E3-CC1E-46CD-A6D8-DB89EE09F784?$BBY_V2_SL_1x1$&wid=1500&hei=1500',
    title:'Skirt',
    oldPrice:12,
    price:19
  }]
  return (
    <div className='list'>
      {
        data?.map(item => (
          <Card  item={item} key={item.id} />
        ))
      }
    </div>
  )
}

export default List



import Card from '../Card/Card.jsx';
import React from 'react'
import './List.scss'
import useFetch from '../../hooks/useFetch.js';

const List = ({catId, maxPrice, sort, subCats }) => {
 
  const { data, loading, error} = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map( item => `&[filters][sub_categories][id][$eq]=${item}`)}`
  )

  return (
    <div className='list'>
      {
        loading ? 'Loading' : data?.map(item => (
          <Card  item={item} key={item.id} />
        )) 
      }
    </div>
  )
}

export default List







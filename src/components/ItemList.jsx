import React from 'react'
import SingleItem from './Singleitem';
import { artistArray } from '../assets/database/artists';

const ItemList = ({ title, items, itemsArray, path, idPath }) => {

    return (
    <div className='item-list'>
                <div className='item-list__header'>
                    <h2>{title} populares</h2>
                    <a href={path} className='item-list__link'>Mostrar tudo</a>
                </div>
    
                <div className='item-list__container'>
                    {itemsArray
                    .filter((currentValue, index) => index < items)
                    .map((currentObj, index) => (
                        <SingleItem idPath={idPath}
                        {...currentObj} 
                        key={`${title}-${index}`}/>
                    ))}
                </div>
            </div>
  )
}

export default ItemList
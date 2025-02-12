import React from 'react'
import ItemList from './ItemList';

const Main = () => {
  return (
    <div className='main'>
        {/* ItemList de Artistas*/}
        <ItemList title="Artistas" items={5}/>
        {/* ItemList de Músicas*/}
        <ItemList title="Músicas" items={10}/>
    </div>
  )
}

export default Main;
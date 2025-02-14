import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Artist = () => {
  return (
    <div className='artist'>
      <div className="artist__header"></div>

      <div className="artist__body"></div>

      <Link to='/song/1'>
        <FontAwesomeIcon className='single-item__icon single-item__icon--artist' icon={faCirclePlay} />
      </Link>
    </div>
  )
}

export default Artist
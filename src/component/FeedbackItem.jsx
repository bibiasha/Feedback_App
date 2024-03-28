
import React from 'react'
import propTypes from'prop-types'
 import Card from './share/Card';
 import { FaTimes, FaEdit } from 'react-icons/fa';
 import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
 
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button onClick={()=>deleteFeedback(item.id)} className='close'><FaTimes color='purple'/></button>
      <button className="edit" onClick={()=>editFeedback(item)}>
        <FaEdit color='purple'/>
      </button>
    </Card>
  )
}

FeedbackItem.propTypes ={
  item: propTypes.object.isRequired,
}

export default FeedbackItem


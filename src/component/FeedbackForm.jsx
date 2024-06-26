import React from 'react'
import Card from './share/Card'
import Button from './share/Button';
import RatingSelect from './RatingSelect';
import { useContext, useState, useEffect} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
    const [text, setText]=useState('');
    const [rating, setRating]=useState(10);
    const [btnDisable, setBtnDisable]=useState(true)
    const [message, setMessage]=useState('')
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(()=>{
        if(feedbackEdit.edit===true){
            setBtnDisable(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    const handleTextChange= (e) => {
        if(text ===''){
            setBtnDisable(true)
            setMessage(null)
        }else if(text !== '' && text.trim <=3){
            setMessage('Text must be at least 10 characters')
            setBtnDisable(true)
        }else{
            setMessage(null)
            setBtnDisable(false)
        }
        setText(e.target.value)
    }

    const handleSummit=(e)=>{
        e.preventDefault();
        if(text.trim().length> 3){
            const newFeedback={
                text,
                rating
            }

            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else{
                            addFeedback(newFeedback)
            }
            setText('')
        }
    }


  return (
    <Card>
      <form onSubmit={handleSummit}>
        <h2>How would you rate your services with us?</h2>
        <RatingSelect select={(rating)=>setRating(rating)}/>
        <div className="input-group">
            <input onChange={handleTextChange} type='text' placeholder='write a review' value={text}/>
            <Button type='submit' version='secondary' isDisabled={btnDisable}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm

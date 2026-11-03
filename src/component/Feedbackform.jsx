import React from 'react'
import Card from './shared/card'
import {useState,useContext,useEffect} from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import{FeedbackContext} from '../context/FeedbackContext'

export default function Feedbackform() {
    const[text,setText]=useState('')
    const[rating,setRating]=useState(10)
    const[btnDisabled,setBtnDisabled]=useState(true)
    const[message,setMessage]=useState('')
const{addFeedback,feedbackEdit,updateFeedback}=useContext(FeedbackContext)
useEffect(()=>{
 if(feedbackEdit.edit===true){
  setBtnDisabled(false)
  setText(feedbackEdit.item.text)
  setRating(feedbackEdit.item.rating)

 }
},[feedbackEdit])
    const handleTextChange=(e)=>{
        const currentValue=e.target.value
        setText(currentValue)
      if(text===''){
        setBtnDisabled(true)
        setMessage(null)
      }
      else if(text !== '' && text.trim().length<=10){
        setMessage('Text must be at least 10 characters')
        setBtnDisabled(true)
      }
      else{
        setMessage(null)
        setBtnDisabled(false)
      }
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      if(text.trim().length>10){
        const newFeedback={
          text,
          rating
        }
        if(feedbackEdit.edit===true){
          updateFeedback(feedbackEdit.item.id,newFeedback)}
          else{
            addFeedback(newFeedback)
        }
        
        setText('')

      }
    }
  return (
    
    <Card>
        <RatingSelect select={(rating)=>setRating(rating)}/>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your services with us?</h2>
            <div className="input-group">
                <input type="text " onChange={handleTextChange} placeholder="Write a review" value={text}/>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}

        </form>
    </Card>
   
  )
}


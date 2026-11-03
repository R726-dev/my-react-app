// import React from 'react'
// // import {useState} from 'react'

//  function FeedbackItem({item}) {
//   // const[rating,setRating]=useState(0)
//   // const[text,setText]=useState("This is the Feedback items")
//   // const handleClick=()=>{
//   //   setRating((prev)=>{
//   //     console.log(prev)
//   //     return prev+1

//   //   }
//   // )
  
//   return (
//     // <div className="card">
//     <Card>
//       <div className="num-display">{item.rating}</div>
//       <div className="text-display">{item.text}</div>
//       </Card>
//     //   {/* <button onClick={handleClick}>Click</button> */}
      
//     // // </div>
//   )
// }
// export default FeedbackItem

import Card from './shared/card'
import {FaTimes,FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import {FeedbackContext} from '../context/FeedbackContext'

function FeedbackItem({item}) {
  const {deleteFeedback,editFeedback} = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color="red" />
      </button>
      <button onClick={()=>editFeedback(item)}className='edit'><FaEdit color='red'/></button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem

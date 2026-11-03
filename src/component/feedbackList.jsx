import React from 'react'
import FeedbackItem from './FeedbackItem'

import {motion,AnimatePresence } from 'framer-motion'
import {useContext} from 'react'
import {FeedbackContext} from '../context/FeedbackContext'

export default function feedbackList() {
  const{feedback}=useContext(FeedbackContext)
    

    if(!feedback||feedback.length===0){
        return<p>No Feedback is here!</p>
    }

    return(
      <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((item)=>(
          <motion.div
          key={item.id}
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          transition={{duration:2}}>
          <FeedbackItem key={item.id} item={item} /> </motion.div>))}
          </AnimatePresence>
        
     
     
    </div>
    )
  // return (


    // <div className='feedback-list'>
    //     {feedback.map((item)=>(<FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />))}
        
     
     
    // </div>
    
  // )

  // feedbackList.propTypes={
  //   feedback:PropTypes.arrayOf(PropTypes.shape({
  //     id:PropType.number.isRequired,
  //     text:PropTypes.string.isRequired,
  //     rating:PropTypes.number.isRequired
    // }))
  }


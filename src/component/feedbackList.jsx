import React from 'react'
import FeedbackItem from './FeedbackItem'

import {motion,AnimatePresence } from 'framer-motion'
import {useContext} from 'react'
import Spinner from './shared/spinner'
import {FeedbackContext} from '../context/FeedbackContext'

export default function feedbackList() {
  const{feedback,isLoading}=useContext(FeedbackContext)
    

    if(!isLoading &&( !feedback||feedback.length===0)){
        return<p>No Feedback is here!</p>
    }

    return isLoading ?(
      <Spinner />
    ) : (
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
  
  }


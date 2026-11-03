import Header from './component/header'
import FeedbackItem from './component/FeedbackItem'


import Feedbacklist from './component/feedbackList'

import Card from './component/shared/card'
import Feedbackstat from './component/Feedbackstat'
import Feedbackform from './component/Feedbackform'
import{Route,Routes,NavLink} from 'react-router-dom'
import AboutPages from './pages/AboutPages'
import AboutIcon from './component/AboutIconLink'

import {useContext} from 'react'
import {FeedbackProvider} from './context/FeedbackContext'

function FeedbackApp(){
    
    return(
        
        <FeedbackProvider>
        
      
        <Header/>
        <div className="container">
            <Routes>
            <Route exact path='/'
            element={
                <>  
        <Feedbackform />
        <Feedbackstat />
        <Feedbacklist />
        
        <Card>
                <NavLink to='/' activeclassame='active'>Home</NavLink>
                <NavLink to='/' activeclassname='active'>About</NavLink>
                </Card>
                </>
}>
        </Route>
        
    <Route path='/about' element={<AboutPages/>}/>
   
     </Routes>
        <AboutIcon/>
    
    
    </div>
   
    </FeedbackProvider>
  )
}
export default FeedbackApp
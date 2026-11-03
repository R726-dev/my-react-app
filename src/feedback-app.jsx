import Header from './component/header'
import FeedbackItem from './component/FeedbackItem'


import Feedbacklist from './component/feedbackList'

import Card from './component/shared/card'
import Feedbackstat from './component/Feedbackstat'
import Feedbackform from './component/Feedbackform'
import{BrowserRouter as Router,Route,Routes,NavLink} from 'react-router-dom'
import AboutPages from './pages/AboutPages'
import AboutIcon from './component/AboutIconLink'
// import Post from './component/Post'
import {useContext} from 'react'
import {FeedbackProvider} from './context/FeedbackContext'

function FeedbackApp(){
    
    // const[feedback,setFeedback]=useState(feedbackData)
    // const addFeedback=(newFeedback)=>{
    //     newFeedback.id=uuidv4()
    //     setFeedback([newFeedback,...feedback])

    // }

    // const deleteFeedback=(id)=>{
    //     if(window.confirm('Are you sure you want to delete')){
    //         setFeedback(feedback.filter((item)=>item.id!==id))
    //     }
    // }
     return(
        <FeedbackProvider>
        <Router future={{v7_startTransition:true,
            v7_relativeSplatPath:true
        }}>
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
    </Router>
    </FeedbackProvider>)
}
export default FeedbackApp
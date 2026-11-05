
import spinnerImage from '../assets/Image1.gif'

function spinner(){
    return(
        <img 
        src={spinnerImage}
        alt='Loading...'
        style={{width:'100px',margin:'auto',display:'block'}}
        />
    )
}
export default spinner

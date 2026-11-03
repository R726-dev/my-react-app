import PropTypes from 'prop-types'
   
function header({ text,bgColor,textColor}) {
    const headerStyle={
        backgroundColor:bgColor,color:textColor,
        
    }
  return (
    <header style={headerStyle} >
        <div className='container'>
            <h1>FeedBack UI</h1>
            <h2>{text}</h2>
        </div>
    </header>
    
  );
}

header.defaultProps={
    text:"Feedback UI",
    bgColor:'red',
    textColor:'white'
};
header.propTypes={
    text:PropTypes.string.isRequired,
    bgColor:PropTypes.string,
    textColor:PropTypes.string
}
export default header

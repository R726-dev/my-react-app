import React from 'react'
import PropTypes from 'prop-types'
export default function card({children,reverse}) {

return(<div className='card' style={{
    backgroundColor:reverse?"       rgb(196, 172, 172)":"rgb(255,244,233)",
    color:reverse?"rgb(67, 67, 80)":"rgb(14, 12, 12)"
}}>
    {children}

</div>)

Card.defaultProps={reverse:true,};

Card.propTypes={
    children:PropTypes.node.isRequired,
    reverse:PropTypes.bool
}
}

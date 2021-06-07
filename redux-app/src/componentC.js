import React from "react";
import {connect} from 'react-redux'



function ComponentC (props){
    
    return (
        <p>{props.inputValue}</p>
        
    )
}

const mapStateToProps = (state) => {
    return {inputValue : state.inputValue}
           
}

export default connect(mapStateToProps)(ComponentC);
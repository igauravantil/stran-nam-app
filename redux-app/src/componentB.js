import React from "react";


function ComponentB(){
    function onChangeListener(e){
        console.log(e.target.value)
    }
    return (
        <input type="text" name="" onChange={onChangeListener}/>
    )
}

export default ComponentB;
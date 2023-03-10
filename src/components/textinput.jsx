import React from 'react'

const TextInput = (props) => {
    function onChangeHandler(env){
        env.preventDefault()
        props.setName(env.target.value)
    }
    
    return (
        <input onChange={onChangeHandler} placeholder={props.text} value={props.value}/>
    )
}

export default TextInput
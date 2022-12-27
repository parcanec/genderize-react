import React from 'react';

function sendName(env){
    env.preventDefault()
    console.log("Передаем имя:)")
}

const TextInput = () => {
    return (
        <input onChange={sendName} placeholder="Имя"/>
    );
};

export default TextInput;
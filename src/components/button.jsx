import React from 'react';

function sayHi(env){
    env.preventDefault()
    console.log("Привет, я нажалась:)")
}

const Button = () => {
    return (
        <button onClick={sayHi} id="checkGender">Проверить</button>
    );
};

export default Button;
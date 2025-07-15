import React from 'react';
import style from '../index.module.css'
const Button = ({text, background, color, width, border}) =>{

    let s = {
        background: background,
        color: color,
        width: width,
        border: border
    }

    return (
        <button style={s} className={style.button}>
            {text}
        </button>
    )
}

export default Button;

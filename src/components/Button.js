import React from 'react'
import '../styles/Button.css'

function Button(props) {
    if (props.type == "submit") return <input type={props.type} className="Button" value={props.value} />
    else return <button type={props.type} onClick={props.click} className="Button">{props.value}</button>
}

export default Button
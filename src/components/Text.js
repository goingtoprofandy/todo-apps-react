import React from 'react'
import '../styles/Text.css'

function Text(props) {
    if (props.type == "heading") return <p className="TextHeading">{props.value}</p>
    else return <p className="Text">{props.value}</p>
}

export default Text
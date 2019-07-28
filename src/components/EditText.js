import React from 'react'
import '../styles/EditText.css'

function EditText(props) {
    if (props.type == "multiple") return <textarea value={props.value} className="EditText" onChange={props.change} placeholder={props.hint} />
    else return <input type={props.type} value={props.value} className="EditText" onChange={props.change} placeholder={props.hint} />
}

export default EditText
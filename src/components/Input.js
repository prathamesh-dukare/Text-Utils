import React from 'react'
import { useState } from 'react'

export default function Input(props) {
    const [currentTextValue, newText] = useState("")
    const onchangeMethod = (event)=>{
        let newValue  = event.target.value;
        newText(newValue)
    }
    const capHandler = () => {
        let capitalizedText = currentTextValue
        newText(capitalizedText)
    }
    const upperHandler = () => {
        let capitalizedText = currentTextValue.toUpperCase()
        newText(capitalizedText)
    }
    const lowerHandler = () => {
        let capitalizedText = currentTextValue.toLowerCase()
        newText(capitalizedText)
    }
    const clearTextHandler = () =>{
        newText("")
    }
    return (
        <>
        <div className="input-group input-group-lg my-4">
            <span className="input-group-text" id="inputGroup-sizing-lg">{props.textValue}</span>
            <input type="text" value = {currentTextValue} onChange ={onchangeMethod} itemID="disabledTextInput" className="form-control disabled" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
        </div>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-primary mx-2" onClick = {capHandler}>Capitalize</button>
            <button type="button" class="btn btn-warning mx-2" onClick = {upperHandler}>UpperCase</button>
            <button type="button" class="btn btn-success mx-2" onClick = {lowerHandler}>LowerCase</button>
            <button type="button" class="btn btn-danger mx-2" onClick = {clearTextHandler}>Clear Text</button>
        </div>
        <div className="container my-4">
            <h3>Your Text Summery</h3>
            <h4>Word Count</h4>
            <p>{currentTextValue.split(" ").length-1} Words and {currentTextValue.length} Characters</p>
            <p>{0.008 * currentTextValue.split(" ").length.toFixed("2")} Minutes Read</p>
            <h4>Text Preview</h4>
            <p>{currentTextValue}</p>
        </div>
        </>
    )
}


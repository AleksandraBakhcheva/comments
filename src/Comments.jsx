import React, { useState } from "react";
import ColourGenerator from "./ColourGenerator";

export default function Comments() {
    const [input, getInput] = useState("");
    const [messages, postMessage] = useState([]);

    // use Hook to generate unique colours for messages
    const {colours, generateColours} = ColourGenerator();

    function onChange(evt) {
        checkValidation(evt.target.value);
    } 
    
    const checkValidation = (userInput) => {
        getInput(userInput);
    }

    const handlePost = (event) => {
        event.preventDefault();
        if (input !== "") {
            let inputReplace = input.replace(/viagra|XXX/gi, "***");
            getInput(inputReplace);
            postMessage(current => [inputReplace, ...current]);
        }
        else {
            return 0;
        }
        getInput("");
        generateColours();
    }

    return (
        <>
            <div className="result">
                {messages.map((message, index) => {
                    return (
                        <p key={index} style={{color: "#" + colours[index]}}>{message}</p>
                    );
                })}
            </div>
            <form onSubmit={handlePost}>
                <label for="messages">
                    <input onChange={onChange} className="messages" type="text" id="messages" placeholder="Введите сообщение" value={input} />
                </label>
                <button>Отправить</button>
            </form>
        </>
    );
}
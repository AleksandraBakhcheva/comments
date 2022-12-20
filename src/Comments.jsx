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
        if (userInput !== "") {
            let inputReplace = userInput.replace(/viagra|XXX/gi, "***");
            getInput(inputReplace);
        }
        else {
            return 0;
        }
    }

    const handlePost = (event) => {
        event.preventDefault();
        getInput("");
        postMessage(current => [input, ...current]);
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
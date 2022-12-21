import React, { useState } from "react";
import useColourGenerator from "./useColourGenerator";

export default function Comments() {
    const [input, setInput] = useState("");
    const [messages, postMessage] = useState([]);

    // use Hook to generate unique colours for messages
    const {colours, generateColours} = useColourGenerator();

    function onChange(evt) {
        checkValidation(evt.target.value);
    } 
    
    const checkValidation = (userInput) => {
        setInput(userInput);
    }

    const handlePost = (event) => {
        event.preventDefault();
        if (input !== "") {
            let inputReplace = input.replace(/viagra|XXX/gi, "***");
            setInput(inputReplace);
            postMessage(current => [inputReplace, ...current]);
        }
        else {
            return null;
        }
        setInput("");
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
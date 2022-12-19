import React, { useState } from "react";

export default function Comments() {
    const [input, getInput] = useState("");
    const [message, postMessage] = useState("");

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
        postMessage(input);
    }

    return (
        <>
            <div className="result">{message + "\n"}</div>
            <form onSubmit={handlePost}>
                <label for="messages">
                    <input onChange={onChange} className="messages" type="text" id="messages" placeholder="Введите сообщение" value={input} />
                </label>
                <button>Отправить</button>
            </form>
        </>
    );
}
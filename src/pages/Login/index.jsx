import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";

export default function Login() {
    const [inputValue, setInputValue] = useState("");

    const {setUser} = useAuth();
    const inputRef = useRef()
    const goTo = useNavigate()

    function handleInput(e) {
        setInputValue(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setUser(inputValue)

        goTo('/');
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [])


    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" onChange={handleInput} value={inputValue} placeholder="username" autoComplete="off"/>
            <br />
            <input type="submit" />
        </form>
    );
}

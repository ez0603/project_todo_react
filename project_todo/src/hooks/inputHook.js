import { useState } from 'react';

export function useInput() {
    const [ inputValue, setInputValue ] = useState("");

    const onchange = (e) => {
        const {value} = e.target;
        setInputValue(() => value);
    }
    return [inputValue, onchange]
}
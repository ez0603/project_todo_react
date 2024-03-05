import React, { useState } from 'react';
import TodoBoard from '../components/TodoBoard';
import { useInput } from '../hooks/inputHook';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const mainLayout = css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fffdfb;
`;

const layout = css`
    width: 70%;
    height: 800px;
    border-radius: 3%;
    background-color: rgb(230, 242, 248);
    box-shadow: 0px 0px 8px #795a3e75;
`;

const inputBox = css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    outline: none;
    border: none;
    border-radius: 25px;
    width: 100%;
    height: 150px;
    resize: none;
    &:focus {
        background-color: #f1f1f1;
    }
`;

const inputContent = css`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    width: 80%;
    height: 80px;
    border: none;
    border-radius: 20px;
    font-weight: 700;

`;

const inputButton = css`
    margin-left: 110px;
    padding: 10px 10px;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 83%;
    height: 50px;
    color: black;
    font-size: 30px;
    background-color: transparent;
    cursor: pointer;
`;

function TodoContent() {
    
    const [ inputValue, setInputValue ] = useInput(""); 
    const [ todoList, setTodoList ] = useState([]);

    const handleAddItem = () => {
        console.log("check", todoList);
        if(todoList === "") {
            return;
        }

        setTodoList([...todoList, inputValue]);
    }
    return (
        <div css={mainLayout}>
            <main css={layout}>
                <div css={inputBox}>
                <input css={inputContent} type='text' value={inputValue} onChange={setInputValue} placeholder='오늘 할 일을 입력해주세요.'/>
                </div>
                <button css={inputButton} onClick={handleAddItem}>+</button>

                <TodoBoard />
            </main>
        </div>
    );
}

export default TodoContent;
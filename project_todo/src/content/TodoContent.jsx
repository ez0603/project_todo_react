import React, { useState } from 'react';
import { useInput } from "../hooks/inputHook"
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
    display: flex;
    align-items: center;
    flex-direction: column;
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
    font-size: 18px;
`;

const inputButton = css`
    margin-bottom: 20px;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 50px;
    color: #2f2121;
    font-size: 30px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 15px;

    &:hover {
        background-color: #eee;
    }
`;

const listLayout = css`
    width: 80%;
    height: 500px;
    background-color: transparent;
    /* border-radius: 25px; */
    overflow: auto;
    &::-webkit-scrollbar{
        display: none;
    }
`;

const listItem = css`
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 60px;
    font-size: 25px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    background-color: #fff2dc;
    margin-bottom: 15px;
    border-radius: 15px;
    color: #544136;

    & > div:nth-of-type(1) {
        display: flex;
        align-items: center;

        & > div {
            margin-right: 10px;
        }
    }

    & > div:nth-of-type(2) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const deleteBtn = css`
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    margin-right: 20px;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #eee;
    }
`;


function TodoContent() {
    const [ todoList, setTodoList ] = useState([]);
    const [ inputValue, onchange, setInputValue] = useInput();

    const handleAddItem = () => {
        if(inputValue === "") {
            alert("내용을 입력해주세요.")
            return;
        }
        const lastIndex = todoList.length - 1
        const lastId = lastIndex < 0 ? 0 : todoList[lastIndex].todoId
        const todo = {
            todoId: lastId + 1,
            content: inputValue
        }
        const newTodoList = [...todoList, todo]
        setTodoList(newTodoList);
        setInputValue("")
    }

    const handleDeleteBtn = (id) => {
        setTodoList([...todoList.filter(todo => todo.todoId !== id)]);
    }

    const handleUpdateBtn = (id) => {
        setInputValue(todoList.filter(todo => todo.todoId === id)[0].content)
        
    }

    const handleUpdateSubmitClick = (id) => {
        const findIndex  = todoList.indexOf(todoList.filter(todo => todo.todoId === id)[0])
        const updateTodoList = [...todoList];
        updateTodoList[findIndex].content = inputValue;
        setInputValue("")
    }

    return (
        <div css={mainLayout}>
            <main css={layout}>
                <div css={inputBox}>
                    <input css={inputContent} type='text' value={inputValue} onChange={onchange} placeholder='오늘 할 일을 입력해주세요.'/>
                </div>
                <button css={inputButton} onClick={handleAddItem}>+</button>
                <div css={listLayout}>
                    {todoList.map((todo, index) => 
                        <div css={listItem} key={todo.todoId}>
                            <div>
                                <input type='checkbox' />
                                <div>{index + 1}</div>
                                <div>{todo.content}</div>
                            </div>
                            <div>
                                <button css={deleteBtn} onClick={() => handleDeleteBtn(todo.todoId)}>삭제</button>
                                <button css={deleteBtn} onClick={() => handleUpdateBtn(todo.todoId)}>수정</button>
                                <button css={deleteBtn} onClick={() => handleUpdateSubmitClick(todo.todoId)}>확인</button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default TodoContent;
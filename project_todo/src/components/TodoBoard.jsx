import React from 'react';
import TodoItem from './TodoItem/TodoItem';
// import TodoContent from '../content/TodoContent';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const listBoard = css`
    background-color: transparent;
    width: 100%;
    height: 50px;
`;

const title = css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

function TodoBoard() {

    return (
        <div css={listBoard}>
            <h1 css={title}>Todo List</h1>
            <TodoItem />
        </div>
    );
}

export default TodoBoard;
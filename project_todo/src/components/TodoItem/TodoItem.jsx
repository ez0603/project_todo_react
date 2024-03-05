import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import TodoContent from '../../content/TodoContent';

const todoItem = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
    border: 1px solid lightblue;
`;

function TodoItem() {
    return (
        
        <div css={todoItem}>
            
        </div>
    );
}

export default TodoItem;
import { css } from "@emotion/react";

export const mainLayout = css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fffdfbbd;
`;

export const layout = css`
    width: 70%;
    height: 800px;
    border-radius: 3%;
    background-color: #fffefd;
    box-shadow: 0px 0px 8px #795a3e75;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const contentBox = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 60px;
    border: 1px solid #eee;
`;
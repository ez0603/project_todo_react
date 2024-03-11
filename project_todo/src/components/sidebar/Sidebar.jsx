/** @jsxImportSource @emotion/react */ 
import { useState } from "react";
import * as S from "./style";
import { MENUS } from "../../content/menu";
import { Link } from "react-router-dom";


function Sidebar() {
    const [ isShow, setShow ] = useState(false);

    return (
        <aside css={S.layout(isShow)}>
            <button css={S.button} 
                    onClick={() => setShow(!isShow)}>

            </button>
            <ul css={S.menuList}>
                {MENUS.map(menu =>
                    <Link css={S.menuItem} to={menu.path} key={menu.id} onClick={() => setShow(false)}>
                        <li>{menu.name}</li>
                    </Link>

                )}
            </ul>
        </aside>
    );
}

export default Sidebar;
import TodoEnd from "../components/TodoEnd/TodoEnd";
import TodoContent from "./TodoContent";

export const MENUS = [
    {
        id: 1,
        name: "TodoList",
        path: "/todo",
        element: <TodoContent />
    },
    {
        id: 2,
        name: "End",
        path: "/todo/end",
        element: <TodoEnd />
    }
]
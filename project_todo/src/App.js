
import { Route, Routes } from 'react-router-dom';
import TodoEnd from './components/TodoEnd/TodoEnd';
import Sidebar from './components/sidebar/Sidebar';
import TodoContent from './content/TodoContent';
import { MENUS } from './content/menu';



function App() {


  return (
    <>
    <Sidebar />
    <TodoContent />
    <TodoEnd />
    <Routes>
      {MENUS.map(menu => <Route key={menu.id} path={menu.path} element={menu.element}/>)}
    </Routes>
    </>
  );
}

export default App;

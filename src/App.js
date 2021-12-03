import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import Home from "./pages/index";
import Menu from "./pages/menu/index";
import Login from "./pages/menu/Login";
import Register from "./pages/menu/Register";
import MenuView from "./pages/menu/Menu";
import { Scrollbars } from 'react-custom-scrollbars';

function App() {
  return (
    <Scrollbars id="content" style={{ height: '100vh' }}>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/login" element={<Login />} />
          <Route path="/menu/register" element={<Register />} />
          <Route path="/menu/:id" element={<MenuView />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </RecoilRoot>
    </Scrollbars >
  );
}

export default App;

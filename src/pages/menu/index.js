import React from "react"
import Recoil from 'recoil';
import { menuIdState } from '../../store/menu';
import Header from "../../component/Header"
import Footer from "../../component/Footer"
import MyMenu from "../../component/menu/MyMenu";
import Dashboard from "../../component/menu/Dashboard";
import "./../../assets/sass/menu/main.sass"

const Menu = () => {
    const [menuId] = Recoil.useRecoilState(menuIdState);

    return (
        <main className="menu">
            {
                menuId ?
                    <Dashboard/>
                :
                    <>
                        <Header />
                        <MyMenu />
                        <Footer />
                    </>

            }
        </main>
    )
}

export default Menu

import React from 'react';
import Recoil from 'recoil';
import { menuIdState } from './../../store/menu';
import { Link } from "react-router-dom"
import { MdMenuBook, MdArrowBackIos } from "react-icons/md";
import { GoSettings } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";
import logo from "./../../assets/images/logo.png"
import Dish from './Dish';
import Customize from './Customize';
import { Scrollbars } from 'react-custom-scrollbars';
import { slide as Menu } from 'react-burger-menu'
import './../../assets/sass/menu/dashboard.sass'
import './../../assets/sass/menu/burger.sass'

const Dashboard = () => {
    const [page, setPage] = React.useState("Plats");
    const [menuId, setMenuId] = Recoil.useRecoilState(menuIdState);
    const [open, setOpen] = React.useState(false);

    const handleOnOpen = () => {
        setOpen(true);
    }
    const handleOnClose = () => {
        setOpen(false);
    }

    return (
        <main className="dashboard-menu">
            <Menu isOpen={open} onOpen={handleOnOpen} onClose={handleOnClose}>
                <Link className="logomenu" to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <div className="menu-items">
                    {
                        page === "Plats" ?
                            <div className="menu-item actif-menu">
                                <MdMenuBook />
                                <span>Ma carte</span>
                            </div>
                            :
                            <div className="menu-item" onClick={() => {
                                setPage("Plats")
                                setOpen(false)
                            }}>
                                <MdMenuBook />
                                <span>Ma carte</span>
                            </div>
                    }
                    {
                        page === "Personalization" ?
                            <div className="menu-item actif-menu">
                                <GoSettings />
                                <span>Personnalisation</span>
                            </div>
                            :
                            <div className="menu-item" onClick={() => {
                                setPage("Personalization")
                                setOpen(false)
                            }} >
                                <GoSettings />
                                <span>Personnalisation</span>
                            </div>
                    }
                    {
                        page === "Parametre" ?
                            <div className="menu-item actif-menu">
                                <AiOutlineSetting />
                                <span>Paramètre</span>
                            </div>
                            :
                            <div className="menu-item" onClick={() => {
                                setPage("Parametre")
                                setOpen(false)
                            }} >
                                <AiOutlineSetting />
                                <span>Paramètre</span>
                            </div>
                    }
                    <div className="menu-item" onClick={() => setMenuId(0)}>
                        <MdArrowBackIos />
                        <span>Retour à mes menus</span>
                    </div>
                    <Link to="/">
                        <div className="menu-item logout">
                            <FiLogOut />
                            <span>Déconnexion</span>
                        </div>
                    </Link>
                </div>
            </Menu>
            <div className="menu">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <div className="menu-items">
                    {
                        page === "Plats" ? 
                            <div className="menu-item actif-menu">
                                <MdMenuBook />
                                <span>Ma carte</span>
                            </div>
                                : 
                            <div className="menu-item" onClick={() => setPage("Plats")}>
                                <MdMenuBook />
                                <span>Ma carte</span>
                            </div>
                    }
                    {
                        page === "Personalization" ?
                            <div className="menu-item actif-menu">
                                <GoSettings />
                                <span>Personnalisation</span>
                            </div>
                            :
                            <div className="menu-item" onClick={() => setPage("Personalization")} >
                                <GoSettings />
                                <span>Personnalisation</span>
                            </div>
                    }
                    {
                        page === "Parametre" ?
                            <div className="menu-item actif-menu">
                                <AiOutlineSetting />
                                <span>Paramètre</span>
                            </div>
                            :
                            <div className="menu-item" onClick={() => setPage("Parametre")} >
                                <AiOutlineSetting />
                                <span>Paramètre</span>
                            </div>
                    }
                    <div className="menu-item" onClick={() => setMenuId(0)}>
                        <MdArrowBackIos />
                        <span>Retour à mes menus</span>
                    </div>
                    <Link to="/">
                        <div className="menu-item logout">
                            <FiLogOut />
                            <span>Déconnexion</span>
                        </div>
                    </Link>
                </div>
            </div>
            <Scrollbars id="content-dashboard" style={{ height: '100vh' }}>
                <div className="content">
                    {
                        page === "Plats" ?
                            <Dish />
                            :
                            null
                    }
                    {
                        page === "Personalization" ?
                            <Customize />
                            :
                            null
                    }
                    {
                        page === "Parametre" ?
                            <>
                                <div className="header-dish">
                                    <div className="title">
                                        <img src="https://res.cloudinary.com/drjp6uslw/image/upload/v1634566532/logos/yl7gjbtfzlquwn2lqfkl.png" alt="icon" />
                                        <h1>Venato</h1>
                                    </div>
                                </div>
                                <div className="parametre">
                                    <h1>Paramètre :</h1>
                                    <button>Suprimer le menu</button>
                                </div>
                            </>
                            :
                            null
                    }
                </div>
            </Scrollbars >
        </main>
    );
}

export default Dashboard;

import React from 'react';
import Recoil from 'recoil';
import { MdAddCircle, MdOutlineQrCode2, MdContentCopy } from "react-icons/md";
import Skeleton from '@mui/material/Skeleton';
import Request from "./../../services/request";
import { menuIdState } from './../../store/menu';
import './../../assets/sass/menu/myMenu.sass'
import "./../../../node_modules/hover.css/css/hover-min.css"

const MyMenu = () => {
    const [menu, setMenu] = React.useState([]);
    const [menuId, setMenuId] = Recoil.useRecoilState(menuIdState);

    React.useEffect(() => {
        Request('https://randomuser.me/api/', {})
            .then(res => {
                if (res.status === 200) {
                    setMenu(res.data);
                }
            });
    }, []);

  return (
        <div className="myMenu">
            <div className="title">
                <h1>Mes Menus</h1>
                <button><MdAddCircle/>Ajouter un menu</button>
            </div>
            <div className="content">
                <ul>
                  <li className="hvr-float" onClick={() => setMenuId(1)}>
                        <div className="mask" style={{backgroundImage: "url('https://res.cloudinary.com/drjp6uslw/image/upload/v1634566532/logos/yl7gjbtfzlquwn2lqfkl.png')"}}></div>
                        <div className="maskcolor"></div>
                        <img className="icon" src='https://res.cloudinary.com/drjp6uslw/image/upload/v1634566532/logos/yl7gjbtfzlquwn2lqfkl.png' alt="chat" />
                        <span>Venato</span>
                        <div>
                          <button><MdOutlineQrCode2 />Voir le QRcode</button>
                          <button><MdContentCopy />Copier le lien</button>
                        </div>
                    </li>
                    {
                        menu.length > 0 ?
                            menu.map(item => (
                                <li key={item.id}>
                                    <img src={item.avatar} alt={item.name}/>
                                    <span>{item.name}</span>
                                    <button><MdOutlineQrCode2 />Voir le QRcode</button>
                                    <button><MdContentCopy />Copier le lien</button>
                                </li>
                            ))
                        :
                            <>
                                <Skeleton className="skeleton" variant="rectangular" />
                                <Skeleton className="skeleton" variant="rectangular" />
                            </>
                    }
                    <li className="hvr-float add">
                        <MdAddCircle />Ajouter un menu
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MyMenu;

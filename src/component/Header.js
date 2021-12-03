import * as React from "react"
import { Link } from "react-router-dom"
import logo from "./../assets/images/logo.png"
import "./../assets/sass/header.sass"


const Header = () => {
    const scroll = (e, id) => {
        const elem = document.querySelector(id)
        if (elem){
            e.preventDefault();
            elem.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            setTimeout(() => { 
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth'
                });
            }, 500)
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
            <div>
                <Link to="/" onClick={(e) => scroll(e, '#advantage')}>Avantages</Link>
                <Link to="/" onClick={(e) => scroll(e, '#tarif')}>Tarifs</Link>
                <Link to="/" onClick={(e) => scroll(e, '#faq')}>FAQ</Link>
                <Link to="/menu/register">
                    <button className="signup">Inscription</button>
                </Link>
                <Link to="/menu/login">
                    <button className="signin">Connexion</button>
                </Link>
            </div>
        </div>
    )
}

export default Header

import React from "react"
import { Link } from "react-router-dom"
import Select from 'react-select'
import Skeleton from '@mui/material/Skeleton';
import "./../../assets/sass/menu/menu.sass"

const options = [
    { value: 'salade', label: 'Salade' },
    { value: 'burger', label: 'Burger' },
    { value: 'pizza', label: 'Pizza' }
]

const MenuView = () => {
    const [selectedOption, setSelectedOption] = React.useState(null)
    const handleChange = (e) => {
        setSelectedOption(e)
    }

    React.useEffect(() => {
        document.querySelector('#content').children[0].addEventListener('scroll', (event) => {
            if (event.target.scrollTop > 300) {
                if (document.querySelector('.menu_select')){
                    document.querySelector('.menu_select').classList.add('visible')
                }
            } else {
                if (document.querySelector('.menu_select')) {
                    document.querySelector('.menu_select').classList.remove('visible')
                }
            }
        });
    }, [])

    return (
        <main className="menuperso">
            <div className="menu_select">
                <Select value={selectedOption} options={options} onChange={handleChange} />
            </div>
            <div className="head">
                <img src="https://res.cloudinary.com/drjp6uslw/image/upload/v1634566532/logos/yl7gjbtfzlquwn2lqfkl.png" alt="icon" />
                <h1>Menu</h1>
                <Select className="select" value={selectedOption} options={options} onChange={handleChange} />
            </div>
            <div className="content">
                <h1>Salade  :</h1>
                <div className="menu_items">
                    <img src="https://res.cloudinary.com/drjp6uslw/image/upload/v1634566532/logos/yl7gjbtfzlquwn2lqfkl.png" alt="icon" />
                    <h2>Salade César</h2>
                    <h3>12.50€</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                </div>
                <div className="menu_items">
                    <img src="https://res.cloudinary.com/drjp6uslw/image/upload/v1634566532/logos/yl7gjbtfzlquwn2lqfkl.png" alt="icon" />
                    <h2>Salade composée</h2>
                    <h3>12.50€</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                </div>
                <Skeleton className="title" />
                <Skeleton className="menu_items" />
            </div>
            <Link className="apy" to="/">Made by Apy</Link>
        </main>
    )
}

export default MenuView

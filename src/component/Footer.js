import * as React from "react"
import { Link } from "react-router-dom"
import facebook from "./../assets/images/facebook.png"
import instagram from "./../assets/images/instagram.png"
import "./../assets/sass/footer.sass"


const Header = () => {
    return (
        <div className="footer">
            <div>
                <h3>contactez nous</h3>
                <p>votremail@mail.com</p>
            </div>
            <div>
                <h3>Rejoignez-nous sur</h3>
                <Link to="/#yourAnchorTag">
                    <img src={facebook} alt="Facebook" />
                </Link>
                <Link to="/#yourAnchorTag">
                    <img src={instagram} alt="instagram" />
                </Link>
            </div>
        </div>
    )
}

export default Header

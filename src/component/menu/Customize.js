import React from "react"
import { HexColorPicker } from "react-colorful";
import FontPicker from "font-picker-react";



const Customize = () => {
    const [color, setColor] = React.useState("#aabbcc");
    const [font, setFont] = React.useState("Open Sans");

    return (
        <main className="Customize">
            <div className="header-dish">
                <div className="title">
                    <img src="https://res.cloudinary.com/drjp6uslw/image/upload/v1634566532/logos/yl7gjbtfzlquwn2lqfkl.png" alt="icon" />
                    <h1>Venato</h1>
                </div>
            </div>
            <h2>Personalization :</h2>
            <div className="content">
                <div className="option">
                    <HexColorPicker color={color} onChange={(value) => {
                        setColor(value)
                    }} />
                    <p>Code héxadécimal :</p>
                    <input type="text" value={color} onChange={(e) => {
                        setColor(e.target.value)
                    }} />
                    <div className="show" style={{ backgroundColor: color}}></div>
                    <p>Police :</p>
                    <FontPicker
                        apiKey="AIzaSyBYOh12Dt84628EaMhOPuv-o3l3TXFLWfw"
                        activeFontFamily={font}
                        onChange={(nextFont) => setFont(nextFont.family)}
                    />
                    <div>
                        <button className="save">Appliquer</button>
                    </div>
                </div>
                <div className="preview">
                    <div className="title">
                        <img src="https://res.cloudinary.com/drjp6uslw/image/upload/v1634566532/logos/yl7gjbtfzlquwn2lqfkl.png" alt="icon" />
                        <h1 style={{ color: color, fontFamily: font }}>Venato</h1>
                    </div>
                    <div className="item">
                        <img src="https://res.cloudinary.com/drjp6uslw/image/upload/v1634566532/logos/yl7gjbtfzlquwn2lqfkl.png" alt="plat"/>
                        <h2 style={{ fontFamily: font }}>Buger</h2>
                        <h3 style={{ color: color }}>12€</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Customize
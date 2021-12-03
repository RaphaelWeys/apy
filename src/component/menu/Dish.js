import React from "react"
import { Link } from "react-router-dom"
import { RiAddCircleLine } from "react-icons/ri";
import { MdQrCode2, MdEdit, MdOutlineDeleteOutline, MdClose } from "react-icons/md";
import { GrView } from "react-icons/gr";
import Skeleton from '@mui/material/Skeleton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Modal from '@mui/material/Modal';
import qrcode from './../../assets/images/response.png';
import CreatableSelect from 'react-select/creatable';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const options = [
    { value: 'salade', label: 'Salade' },
    { value: 'burger', label: 'Burger' },
    { value: 'pizza', label: 'Pizza' }
]

const Dish = () => {
    const [image, setImage] = React.useState("");
    const [cropper, setCropper] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openAddDish, setOpenAddDish] = React.useState(false);
    const handleOpenAddDish = () => setOpenAddDish(true);
    const handleCloseAddDish = () => setOpenAddDish(false);

    const handleChangeSelect= (value) => {
        console.log(`Option selected:`, value);
    }
    const handleInputChangeSelect = (inputValue) => {
        console.log(`Input changed:`, inputValue);
    }

    const onChange = (e) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    return (
        <main className="Dish">
            <div className="header-dish">
                <div className="title">
                    <img src="https://res.cloudinary.com/drjp6uslw/image/upload/v1634566532/logos/yl7gjbtfzlquwn2lqfkl.png" alt="icon"/>
                    <h1>Venato</h1>
                </div>
                <div className="menu-option">
                    <button onClick={handleOpenAddDish}><RiAddCircleLine />Ajouter un plat</button>
                    <button onClick={handleOpen}><MdQrCode2 />QR code</button>
                    <Link target="_blank" to="/menu/1"><button><GrView />Regarder le menu</button></Link>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
            >   
                <div className="modal-content">
                    <MdClose onClick={handleClose} className="close"/>
                    <img className="logo" src="https://res.cloudinary.com/drjp6uslw/image/upload/v1634566532/logos/yl7gjbtfzlquwn2lqfkl.png" alt="icon"/>
                    <h1>Venato</h1>
                    <p>Scané le QR code pour accéder au menu</p>
                    <img className="qrcode" src={qrcode} alt="qrcode" />
                    <button>Imprimer le QRcode</button>
                    <button>Télécharger le QRcode</button>
                </div>
            </Modal>
            <Modal
                open={openAddDish}
                onClose={handleCloseAddDish}
            >
                <div className="modal-content">
                    <MdClose onClick={handleCloseAddDish} className="close" />
                    <h1>Ajouter un plat</h1>
                    <label>
                        <span className="text">Nom de la catégorie :</span>
                        <CreatableSelect
                            className="select-cat"
                            isClearable
                            onChange={handleChangeSelect}
                            onInputChange={handleInputChangeSelect}
                            options={options}
                            placeholder="Nom de la catégorie..."
                        />
                    </label>
                    <label>
                        <span className="text">Nom du plat :</span>
                        <input type="text" placeholder="Nom du plat" />
                    </label>
                    <label>
                        <span className="text">Prix du plat :</span>
                        <input type="text" placeholder="Prix du plat" />
                    </label>
                    <label>
                        <span className="text">Description du plat :</span>
                        <input type="text" placeholder="Description du plat" />
                    </label>
                    {
                        image === "" ?
                            <input className="upload" type="file" onChange={onChange} />
                        :
                            <>
                                <MdOutlineDeleteOutline onClick={() => setImage("")} className="delete-img"/>
                                <Cropper
                                    className="cropper"
                                    zoomTo={0.5}
                                    initialAspectRatio={1 / 1}
                                    aspectRatio={1 / 1}
                                    preview=".img-preview"
                                    src={image}
                                    viewMode={1}
                                    minCropBoxHeight={10}
                                    minCropBoxWidth={10}
                                    background={false}
                                    responsive={true}
                                    autoCropArea={1}
                                    checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                                    onInitialized={(instance) => {
                                        setCropper(instance);
                                    }}
                                    guides={true}
                                />
                            </>
                    }
                    <button>Ajouter le plat</button>
                </div>
            </Modal>
            <div className="content">
                <h1>Salade</h1>
                <div className="item">
                    <img src="https://res.cloudinary.com/drjp6uslw/image/upload/v1634566532/logos/yl7gjbtfzlquwn2lqfkl.png" alt="icon"/>
                    <div>
                        <h2>Salade cesard</h2>
                        <h3>10.30€</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                    </div>                        
                    <FormGroup className="switch">
                        <FormControlLabel control={<Switch defaultChecked />} label="En stock" />
                    </FormGroup>
                    <div className="options">
                        <button><MdEdit/>Modifier</button>
                        <button className="btnred"><MdOutlineDeleteOutline />Suprimer</button>
                    </div>
                </div>
                <div className="item">
                    <img src="https://res.cloudinary.com/drjp6uslw/image/upload/v1634566532/logos/yl7gjbtfzlquwn2lqfkl.png" alt="icon" />
                    <div>
                        <h2>Salade cesard</h2>
                        <h3>10.30€</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                    </div>
                    <FormGroup className="switch">
                        <FormControlLabel control={<Switch defaultChecked />} label="En stock" />
                    </FormGroup>
                    <div className="options">
                        <button><MdEdit />Modifier</button>
                        <button className="btnred"><MdOutlineDeleteOutline />Suprimer</button>
                    </div>
                </div>
                <h1>Burger</h1>
                <div className="item">
                    <img src="https://res.cloudinary.com/drjp6uslw/image/upload/v1634566532/logos/yl7gjbtfzlquwn2lqfkl.png" alt="icon" />
                    <div>
                        <h2>Burger cesard</h2>
                        <h3>10.30€</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                    </div>
                    <FormGroup className="switch">
                        <FormControlLabel control={<Switch defaultChecked />} label="En stock" />
                    </FormGroup>
                    <div className="options">
                        <button><MdEdit />Modifier</button>
                        <button className="btnred"><MdOutlineDeleteOutline />Suprimer</button>
                    </div>
                </div>
                <div className="item">
                    <img src="https://res.cloudinary.com/drjp6uslw/image/upload/v1634566532/logos/yl7gjbtfzlquwn2lqfkl.png" alt="icon" />
                    <div>
                        <h2>Burger cesard</h2>
                        <h3>10.30€</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                    </div>
                    <FormGroup className="switch">
                        <FormControlLabel control={<Switch defaultChecked />} label="En stock" />
                    </FormGroup>
                    <div className="options">
                        <button><MdEdit />Modifier</button>
                        <button className="btnred"><MdOutlineDeleteOutline />Suprimer</button>
                    </div>
                </div>
                <Skeleton className="title" />
                <Skeleton className="item" />
                <Skeleton className="item" />
            </div>
        </main>
    )
}

export default Dish
import React from "react"
import { useForm } from "react-hook-form";
import Header from "../../component/Header"
import Footer from "../../component/Footer"
import "./../../assets/sass/menu/login.sass"

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <main>
            <Header />
            <div className="login">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Connexion</h1>
                    <label>
                        <p className="label">Nom d'utilisateur:</p>
                        <input type="text" defaultValue="" placeholder="Nom d'utilisateur" {...register("user")} />
                    </label>
                    <label>
                        <p className="label">Mot de passe:</p>
                        <input type="password" {...register("password", { required: true })} />
                        {errors.password && <p className="error">Aucun mot de passe.</p>}
                    </label>

                    <input type="submit" />
                </form>
            </div>
            <Footer />
        </main>
    )
}

export default Login

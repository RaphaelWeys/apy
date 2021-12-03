import * as React from "react"
import { useForm } from "react-hook-form";
import Header from "../../component/Header"
import Footer from "../../component/Footer"
import "./../../assets/sass/menu/login.sass"

const Register = () => {
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
            <div className="register">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Inscription</h1>
                    <label>
                        <p className="label">Nom d'utilisateur:</p>
                        <input type="text" defaultValue="" placeholder="Nom d'utilisateur" {...register("user")} />
                    </label>
                    <label>
                        <p className="label">Email:</p>
                        <input type="text" defaultValue="" placeholder="Email" {...register("email")} />
                    </label>
                    <label>
                        <p className="label">Mot de passe:</p>
                        <input type="password" {...register("password", { required: true })} />
                        {errors.password && <p className="error">Aucun mot de passe.</p>}
                    </label>
                    <label>
                        <p className="label">Comfirme Mot de passe:</p>
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

export default Register
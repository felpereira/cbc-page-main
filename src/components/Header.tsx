import dogs from "../assets/Photos/Header/dogs.png";
import image from "../assets/Photos/Header/image.png";
import logo from "../assets/Photos/Logos/logo.png";
import pata from "../assets/Photos/Logos/pata.png"
import '../styles/header.scss';

export function Header() {
    return (
        <section className="header">
            <img src={dogs} alt="Dogs" className="dogs" />

            <img src={logo} alt="logo" className="logo" />

            <img src={image} alt="image" className="image" />

            <img src={pata} alt="pata-cachorro" className="pata" />


            <div className="text">
                <p className="title">Seja Muito Bem Vindo!</p>

                <p className="subtitle">Adote e Mude uma vida!</p>

                <p className="description">ONG Beneficente em prol a causa animal</p>
            </div>

        </section>
    );
}

import "../styles/footer.scss"
import footer from "../assets/Photos/Footer/footer.png"
import instagram from "../assets/Photos/Footer/instagram.png"
import logo from "../assets/Photos/Logos/logo.png"
export function Footer() {
    return (
        <section className="footer">
            <p className="title">Como Entrar em Contato?</p>

            <p className="text-1">Nossas redes sociais estarão sendo disponíveis para entrar em contato conosco, tanto para dúvidas, doações e adoções!</p>

            <div className="social">
                <img src={instagram} alt="instagram-logo" className="instagram" />
                <p>Instagram:</p>
                <a href="https://www.instagram.com/campobompracachorro/" target="_blank">Instagram CBC</a><br />
                <a href="https://www.instagram.com/brechocbc_/" target="_blank">Instagram Brechó CBC</a>
            </div>

            <div className="text-2">
                <p>IMPORTANTE!</p>
                <p>Caso tenha se interessado e quer adotar, preencha nosso formulário e logo após entre em contato conosco!
                    (Link do formulário em breve)</p>
            </div>
            <img src={logo} alt="logo" className="logo" />

            <p className="message">“Adotar é salvar uma vida, dar uma nova chance ao amor, e ganhar um amigo incondicional para transformar a sua Vida!’’</p>

            <img src={footer} alt="dog-cat" className="footer" />
        </section >
    )
}
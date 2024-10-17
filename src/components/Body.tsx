import "../styles/body.scss"

import logo from "../assets/Photos/Logos/logo.png"
import logo2 from "../assets/Photos/Logos/white-logo.png"

import cat from "../assets/Photos/Body/cat.png"
import cat2 from "../assets/Photos/Body/cat-2.png"
import cat3 from "../assets/Photos/Body/cat-3.png"
import cat4 from "../assets/Photos/Body/cat-4.png"
import cat5 from "../assets/Photos/Body/cat-5.png"

import dog from "../assets/Photos/Body/dog.png"
import dog2 from "../assets/Photos/Body/dog-2.png"
import dog3 from "../assets/Photos/Body/dog-3.png"
import dog4 from "../assets/Photos/Body/dog-4.png"
import dog5 from "../assets/Photos/Body/dog-5.png"
import dog6 from "../assets/Photos/Body/dog-6.png"
import dog7 from "../assets/Photos/Body/dog-7.png"
import dog8 from "../assets/Photos/Body/dog-8.png"
import dog9 from "../assets/Photos/Body/dog-9.png"
import dog10 from "../assets/Photos/Body/dog-10.png"

import horse from "../assets/Photos/Body/horse.png"
import horse2 from "../assets/Photos/Body/horse-2.png"
import horse3 from "../assets/Photos/Body/horse-3.png"

import pata from "../assets/Photos/Logos/pata.png"

export function Body() {
    return (
        <>
            <section className="about-1">

                <p className="title">Quem Nós Somos?</p>

                <img src={cat} alt="cat" className="cat" />

                <p className="text-1">A ONG Campo Bom pra Cachorro fundada em 2014 por quatro amigas que ja realizavam trabalho voluntário na causa animal e que resolveram se organizar em uma associação.</p>

                <p className="text-2">Atualmente em 2024, estamos com mais de 120 Cães, 70 Gatos e 5 Cavalos em nosso lares temporários, todos em busca de um lar que lhes deem muito amor pois temos a maior certeza de que eles farão o mesmo por você! </p>

                <img src={dog} alt="Dog" className="dog" />
                <img src={pata} alt="pata-cachorro" className="pata" />

            </section >

            <section className="about-2">
                <img src={horse} alt="horse" className="horse" />

                <p className="text-1">Todos os nossos animais passam por rigorosos cuidados de saúde, todos são castrados e vacinados anualmente, sendo assim prezando pelo cuidado e qualidade de vida de cada um deles! </p>

                <img src={cat2} alt="cat" className="cat-2" />

                <p className="text-2">Nossos esforços diarios são trabalhos 100% voluntários, mantidos por meio do brechó beneficiente, assim arrecadando fundos tanto do brechó quanto de doações para tratamentos/cirurgias, remédios, rações entre outras necessidades.</p>

                <img src={pata} alt="pata-cachorro" className="pata" />

                <img src={pata} alt="pata-cachorro" className="pata2" />
            </section >


            <section className="video">
                <img src={cat3} alt="cat" className="cat3" />
                <img src={cat4} alt="cat" className="cat4" />
                <img src={cat5} alt="cat" className="cat5" />

                <img src={dog2} alt="dog" className="dog2" />
                <img src={dog3} alt="dog" className="dog3" />
                <img src={dog4} alt="dog" className="dog4" />
                <img src={dog5} alt="dog" className="dog5" />
                <img src={dog6} alt="dog" className="dog6" />
                <img src={dog7} alt="dog" className="dog7" />
                <img src={dog8} alt="dog" className="dog8" />
                <img src={dog9} alt="dog" className="dog9" />
                <img src={dog10} alt="dog" className="dog10" />

                <img src={horse2} alt="horse" className="horse2" />
                <img src={horse3} alt="horse" className="horse3" />

                <img src={pata} alt="pata-cachorro" className="pata" />

                <img src={pata} alt="pata-cachorro" className="pata2" />
            </section>

            <section className="help">
                <p className="title">Como Você Pode nos Ajudar!?</p>

                <p className="text-1">Assim como nosso Brechó vamos disponibilizar nossa chave PIX para QUALQUER valor em doação que você estiver disposto a ajudar, Isso significa muito para nós! </p>

                <p className="title-2">Dados para a Doação:</p>
                <div className="pix">
                    <p className="subtitle">Chaves PIX</p>
                    <li>PIX: ONGCAMPOBOMPRACACHORRO@GMAIL.COM</li>
                    <li>PIX CNPJ: 24.494.672/0001-69</li>
                </div>

                <div className="bank">
                    <p className="subtitle">Transferência ou depósito bancário</p>
                    <li>Banco Barisul - 041</li>
                    <li>Agência: 0163</li>
                    <li>Conta Corrente: 06.099833.0-8</li>
                    <li>Titular: Campo Bom pra Cachorro</li>
                    <li>CNPJ: 24.494.672/0001-69</li><br></br>

                    <li>PICPAY: Campo Bom pra Cachorro</li>
                </div>

                <img src={logo} alt="logo" className="logo" />

                <img src={pata} alt="pata-cachorro" className="pata" />

                <img src={pata} alt="pata-cachorro" className="pata2" />
            </section >

            <section className="donations">
                <p className="title">BRECHÓ CBC</p>

                <p className="subtitle">Pontos de Entrega de Doações:</p>

                <div className="delivery">

                    <li>Brechó CBC: Av. Presidente Vargas, 1462 Centro, Campo Bom
                    </li><br />

                    <li>
                        Butiquim Nordestino: Av. Independência 889 Centro, Campo Bom </li>
                </div>

                <p className="subtitle-2">Venha nos Visitar Também!</p>
                <div className="location">

                    <p>Localização e Horários:
                        Av. Presidente Vargas, 1462, Porto Blos, Campo Bom

                        SEG - QUA - SEX
                        14h às 17:30</p>
                </div>

                <p className="thanks">A SUA AJUDA SALVA VIDAS!</p>

                <img src={logo2} alt="logo" className="logo2" />

                <img src={pata} alt="pata-cachorro" className="pata" />

                <img src={pata} alt="pata-cachorro" className="pata2" />

            </section>
        </>
    )
}
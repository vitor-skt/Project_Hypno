import React from 'react'
import './index.scss';
// import Navbar from '../../components/Navbar/Navbar';
import InsertInfo from '../../components/InfoConteiner/infoConteiner';

function HomePage() {
    return (
        <>
            <InsertInfo InnerInfo="Dúvidas Frequentes" />
            <div className="HomeContainer">
                <article className="BackgroundImgHome">
                    <img src="/images/meditation.png" alt="backgroundImg" />
                </article>
                <section className="ContentConteiner">
                    <div className="Topic1">
                        <h1>O que é a <span>Hipnoteriapia?</span><i className="fa-solid fa-face-laugh-beam"></i></h1>
                        <p className="Text1">Hipnoterapia é o uso terapêutico da hipnose, ou o tratamento de uma doença com o uso de técnicas hipnóticas.<br />
                            É uma psicoterapia que facilita a sugestão, a reeducação ou a análise por meio da hipnose. O profissional médico que exerce a hipnose é chamado hipniatra. Hipniatria é a hipnose praticada por médicos. A hipnose, além de na Medicina, é utilizada também na Odontologia, na Psicologia, na Fisioterapia, na Enfermagem e outras profissões de saúde.
                        </p>
                    </div>
                    <div className="Topic2">
                        <h1>Para que serve?<i className="fa-solid fa-face-smile-wink"></i></h1>
                        <p className="Text2">A hipnoterapia é uma terapia que tem o apoio da hipnose, que serve para o tratamento de doenças psicossomáticas utilizando o foco e a concentração. Sua principal finalidade é trazer resultados, utilizando também técnicas que envolvem a psicologia, a programação Neurolinguística e outras matérias relacionadas a essa. Sendo de suma importância para pessoas que procuram se tratar.
                            Sendo assim, é um método eficiente e totalmente indicado. Vale ressaltar que a hipnose, por si só, não é um tipo de terapia, antes, é uma valiosa ferramenta que agrega agilidade e dinâmica aos processos terapêuticos; o termo “hipnoterapia” é única e tão somente uma forma de especificar que será usada a hipnose na terapia.
                        </p>
                    </div>
                </section>

            </div>
        </>
    )
}

export default HomePage;
import React from 'react'
import styled from 'styled-components';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import GithubIcon from '@material-ui/icons/GitHub';
import Particle from '../Components/Particle';


function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hola, soy <span>Marcelo Romero</span></h1>
                <p>
                    Un programador apasionado;me capacito constantemente de forma autodidacta.
                    Poseo experiencia en una gran variedad de lenguajes o frameworks o base de datos, dentro de los cuales están: Node.js, JavaScript, Python, PHP, React, Redux, MySQL, MongoDB, HTML y CSS. Los he utilizado en diferentes proyectos y de forma freelancer.
                    Me considero una persona resolutiva, ya que busco la manera más rápida y eficaz de solucionar problemas. Perseverancia y empeño son características que reflejan mi personalidad; y el detallismo se ve reflejado en mis proyectos.
                    <br /> Deseo trabajar con una empresa, la cual me permita aumentar mis conocimientos, tanto profesionales como personales
                </p>
                <div className="icons">
                    <a href="https://api.whatsapp.com/send/?phone=5491162371236&text&type=phone_number&app_absent=0" className="icon i-whatsapp">
                        <WhatsAppIcon />
                    </a>
                    <a href="https://github.com/mar-romero" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/mar-romero-/" className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        @media screen and (max-width:1200px){
            margin-top: 10rem;
          }

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid #128c7e;
                    color: #128c7e;
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-linkedin{
                &:hover{
                    border: 2px solid #0e76a8;
                    color: #0e76a8;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }

            }
        }
    }
`;

export default HomePage;

import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">
                <h4>Soy <span>Marcelo Romero</span></h4>
                <p className="paragraph">
                    Desde chico siempre me gustó la lógica, resolver problemas y la creación objetos, jugaba mucho con los Legos, gracias a eso hoy en día
                    me encuentro estudiando de forma autodidacta programación y encontré una pasión, además de la cocina y el tenis de mesa.
                    Me encanta investigar un tema para poder aplicarlo en mi día a día, ya sea en desarrollando una aplicación o en la vida misma.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Nombre: Marcelo Ezequiel Romero</p>
                        <p>Nacionalidad: Argentino</p>
                        <p>Idiomas: Español e Ingles</p>
                        <p>Ubicación: Buenos Aires, Argentina</p>
                        <p>Oficio: Programador Backend</p>
                    </div>
                </div>
                <a href="https://bit.ly/Marcelo_Romero">
                    <PrimaryButton title={'Curriculum Vitae'} />
                </a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            border-radius: 10% / 50%;;
            object-fit: cover;
        }

    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;

import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Experiencia'} span={'experiencia'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Trabajos'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2020 - Presente'} 
                        title={'Full Stack Developer - Backend Developer'}
                        subTitle={'Freelance'}
                        text={'Realicé un E-commerce autogestionable. Las imágenes de los productos son subidas a Firebase y elaboré la autenticación de diferentes usuarios para poder ingresar a diferentes secciones de la web. Desarrollé 2 secciones nuevas de la página principal para una logística. La primera, para mejorar los procesos logísticos de mudanzas y la segunda, generé una Api Rest para agilizar la incorporación de transportistas. Tecnologías usadas: Node.js, React, Redux, Mongo DB, Firebaase, JavaScript, CSS, HTML, PHP , MySQL'} 
                    />
                    <ResumeItem 
                        year={'2020 - 2021'} 
                        title={'Analista y Backend Developer'}
                        subTitle={'Ocasa'}
                        text={'Programé un nuevo software que a través de una base de datos y chat bot permitía coordinar, agendar y almacenar la información de empleados tercerizados. Disminuyendo los tiempos en este proceso de 8hs a 1hr. Coordiné a 600 transportistas para lograr la distribución de la paquetería. Tecnologías usadas: Python(Web scraping), MySQL '} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educación'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2020 - Presente'} 
                        title={'Desarrollador Backend Node.js'}
                        subTitle={'Autodidacta - Coder House'}
                        text={' Desarrolló aplicaciones modernas con Node.js y MongoDB. Programó en Javascript del lado del servidor aplicando técnicas asincrónicas. Aprendó a trabajar con Bases de datos relacionales y no relacionales dominando la gestión de los datos en forma eficiente, ágil y con una gran facilidad de escalabilidad.'} 
                    />
                    <ResumeItem 
                        year={'2021 - 2022'} 
                        title={'Desarrollador JavaScript'}
                        subTitle={'Autodidacta - Coder House - Udemy '}
                        text={'Aprendí los fundamentos del lenguaje de programación más usado en la actualidad, con el cual es posible crear aplicaciones de todo tipo. Reconozco la utilidad de las librerías  jQuery, y cómo aplicarlas en desarrollo para apps modernas con AJAX.'} 
                    />
                    <ResumeItem 
                        year={'2021 - 2021'} 
                        title={'Desarrollador Python'}
                        subTitle={'UTN - Udemy - Imovee'}
                        text={'Aprendi los fundamentos de la programación, la programación orientada a objetos como poliformismo, herencia, encapsulamiento y abstraccion, bases de datos SQL, maneje los frameworks más reconocidos en Python: Tkinter Django,Flask'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume

import React from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';
import Particle from '../Components/Particle';

function AboutPage() {
    return (
        <MainLayout>
            <div className="particle-con">
                <Particle />
            </div>
            <AboutStyled >
                <Title title={'Acerca de mí'} span={'Acerca de mí'} />
                <ImageSection />
            </AboutStyled >
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage

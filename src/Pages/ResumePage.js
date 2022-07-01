import React from 'react';
import Skills from '../Components/Skills';
import { MainLayout} from '../styles/Layouts';
import Resume from '../Components/Resume';
import Particle from '../Components/Particle';
function ResumePage() {
    return (
        <MainLayout>
            <div className="particle-con">
                <Particle />
            </div>
            <Skills />
            <Resume />
        </MainLayout>
    )
}

export default ResumePage

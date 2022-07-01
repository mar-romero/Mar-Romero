import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';


function Skills() {
    return (
        <SkillsStyled>
            <Title title={'Mis Skills'} span={'mis skills'} />
            <InnerLayout>
                <div className="skills">
                    <Image src="https://i.imgur.com/3Lz6EGf.png" />
                    <Image src="https://i.imgur.com/39Dk52R.png" />
                    <Image src="https://i.imgur.com/kYo9rct.png" />
                    <Image src="https://i.imgur.com/ssHldmT.png" />
                    <Image src="https://i.imgur.com/m7BN3X8.png" />
                    <Image src="https://i.imgur.com/DeXGfcL.png" />
                    <Image src="https://i.imgur.com/bsGbQeZ.png" />
                    <Image src="https://i.imgur.com/hFJTQOb.png" />
                    <Image src="https://i.imgur.com/PenYW5W.png" />
                    <Image src="https://i.imgur.com/iy4X2Y8.png" />
                    <Image src="https://i.imgur.com/iLL6Rqa.png" />
                    <Image src="https://i.imgur.com/IvhEJAa.png" />

                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(3, 0.3fr);
        grid-row-gap: 0rem;
        grid-column-gap: 0rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;


const Image = styled.img`
height: 100%;

`;
export default Skills;

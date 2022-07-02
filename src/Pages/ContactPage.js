import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import ChatIcon from '@material-ui/icons/Chat';
import ContactItem from '../Components/ContactItem';

function ContactPage() {
    const phone = <WhatsAppIcon />
    const email = <EmailIcon />
    const location = <ChatIcon />
    return (
        <MainLayout>
            <Title title={'Contacto'} span={'Contacto'} />
            <ContactPageStyled >
                <InnerLayout className={'contact-section'}>
                    <div className="right-content">
                         <a href="https://api.whatsapp.com/send/?phone=5491162371236&text&type=phone_number&app_absent=0"></a>
                        <ContactItem title={'Celular'} icon={phone} cont1={'+549-11-6237-1236'} /> 
                        <ContactItem title={'Email'} icon={email} cont1={'romero-ar@hotmail.com'}/>
                        <a href="https://linktr.ee/mar_romero">
                        <ContactItem title={'Redes'} icon={location} cont1={'linktr.ee/mar_romero'} />
                        </a>
                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        margin-left:200px;
        margin-top:50px;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            margin-left:0px;
            margin-top:5px;
            grid-template-columns: repeat(0, 0fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 150px;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }

            
        }
    }
`;

export default ContactPage


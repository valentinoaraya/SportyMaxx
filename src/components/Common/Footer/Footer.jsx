import React from 'react';
import "./Footer.css"
import SectionFooter from './SectionFooter/SectionFooter.jsx';

const Footer = () => {

    const arrayCategories = ["Remeras", "Buzos", "Camisas", "Pantalones", "Bermudas", "Mallas", "Accesorios"]
    const arrayMediosPago = ["Mercado Pago", "Tarjetas"]
    const arrayMediosEnvio = ["Correo Argentino"]
    const arrayContact = ["+54 2625123456"]
    const arraySocials = ["Instagram"]
    const arrayAddress =["Avenida Alvear Este 74", "General Alvear, Mendoza, Argentina"]

    return (
        <footer>
            <section className='sectionsContainer'>
                <SectionFooter titleSection1={"CATEGORÍAS"} arraySubtitles1={arrayCategories}/>
                <SectionFooter 
                    titleSection1={"MEDIOS DE PAGO"} arraySubtitles1={arrayMediosPago} 
                    titleSection2={"MEDIOS DE ENVÍO"} arraySubtitles2={arrayMediosEnvio} 
                />
                <SectionFooter titleSection1={"DONDE ENCONTRARNOS"} arraySubtitles1={arrayAddress}/>
                <SectionFooter 
                    titleSection1={"CONTACTO"} arraySubtitles1={arrayContact} 
                    titleSection2={"REDES SOCIALES"} arraySubtitles2={arraySocials} 
                />
            </section>
            <section className='sectionCopyright'>
                <p>Copyright © 2024. Todos los derechos reservados. - Página diseñada y desarrollada por Valentino Araya.</p>
                <p>Instagram: @tinoaraya</p>
            </section>
        </footer>
    );
}

export default Footer;

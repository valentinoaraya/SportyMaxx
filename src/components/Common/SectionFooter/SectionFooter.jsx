import React from 'react';
import "./SectionFooter.css"

const SectionFooter = ({ titleSection1, titleSection2, arraySubtitles1, arraySubtitles2 }) => {

    if (!titleSection2 && !arraySubtitles2) {
        titleSection2 = ""
        arraySubtitles2 = []
    }

    return (
        <div>
            <div className='sectionFooter'>
                <h4 className='titleFooterSection'>{titleSection1}</h4>
                {
                    arraySubtitles1.map((element) => {
                        if (titleSection1 !== "MEDIOS DE PAGO") {
                            return <p key={element}>{element}</p> // Aquí van los elementos que necesitan un link o redirección
                        } else {
                            return <p key={element}>{element}</p> // Aquí van los medios de pago y envío
                        }
                    })
                }
            </div>
            <div className='sectionFooter'>
                <h4 className='titleFooterSection'>{titleSection2}</h4>
                {
                    arraySubtitles2.map((element) => {
                        if (titleSection2 !== "MEDIOS DE ENVÍO") {
                            return <p key={element}>{element}</p> // Aquí van los elementos que necesitan un link o redirección
                        } else {
                            return <p key={element}>{element}</p> // Aquí van los medios de pago y envío
                        }
                    })
                }
            </div>
        </div>
    );
}

export default SectionFooter;

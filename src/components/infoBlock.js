import React, {useEffect, useRef, useState} from 'react';
import block from './info_block.module.css'

const InfoBlock = (
    {img, header, text, small, direction, component, button, background = 'white', color = 'black', isShow = false }
    ) =>{

    const [show, setShow] = useState(false)

    let flDirection ={
        flexDirection: direction
    }
    let invisible = {
        background: background,
        opacity: '0',
        margin: '20px 0 0 0'

    }
    let visible = {
        background: background,
        opacity: '1',
        margin: '0',
    }
    let headerColor ={
        color: color
    }

    let sectionRef = useRef()

// eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{

        if(isShow){
            setShow(true)
        }

        window.addEventListener("scroll", ()=>{
            if(window.scrollY + window.innerHeight > sectionRef.current.offsetTop){
                setShow(true)
            }
        })
    })
    return (
        <section className={block.info_block} style={show ? visible  : invisible} ref={sectionRef}>
            <div className={block.container}>
                <div className={block.content} style={flDirection}>
                    <div className={block.left}>
                        <p className={block.small}>{small}</p>
                        <h2 style={headerColor}>{header}</h2>
                        <p>{text}</p>
                        {component}
                        {button}
                    </div>
                    <div className={block.right} >
                        <img src={img} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoBlock;

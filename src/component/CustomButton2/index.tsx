import React from 'react'
import { useState } from 'react'

import "./index.sass"

type Props = {

    icon      : string  ,
    selected? : string  ,
    onChange? : Function,

    bg_color?  : string,
    bg_hover?  : string,
    bg_active? : string,

    text_color?  : string,
    text_hover?  : string,
    text_active? : string,

}

const index = ({ 

    icon    , // IMPORTANT
    isLoadig, // delete
    onChange, // click

    bg_color  = "#ebeef0",
    bg_hover  = "#ffffff",
    bg_active = "#eef2f4",

    text_color  = "#878c9a",
    text_hover  = "#34323a",
    text_active = "#34323a",

} : Props) => {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {

        setIsHover(true);
    };
    
    const handleMouseLeave = () => {

        setIsHover(false);
    };

    const ButtonStyle = {

        color           : isHover ? text_hover : text_color , 
        backgroundColor : isHover ? bg_hover   : bg_color   ,
    };

    return (

        <button 
            style={ButtonStyle}

            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}

            onClick = {
                
                onChange && onChange(true)
            }

            id="customButton2"
        >
            <i className={icon}></i>

        </button>

    )

}

export default index
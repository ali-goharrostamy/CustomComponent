import React, { useState } from "react";
import "./index.sass";

type props = {

    bg_color   : string    ; 
    text_color : string    ;
    title      : string    ;
    isDisable? : boolean   ;
    // onClick    : () => void;

};

const CustomBadge1 = ({

    title     ,
    // onClick   ,
    bg_color  ,
    isDisable ,
    text_color,

}: props) => {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {

        setIsHover(true);
    };
    
    const handleMouseLeave = () => {

        setIsHover(false);
    };

    const ButtonStyle = {

        color           : isHover ? text_color : bg_color  , 
        backgroundColor : isHover ? bg_color   : text_color,
    };

    return (

        <section

            id       ={"custom-badge-1-container"}
            // onClick  ={isDisable ? () => false   : onClick}
            className={isDisable ? "cb-disabled" : ""     }
            style    ={ButtonStyle}

            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            <p>{title}</p>

        </section>

    );

};

export default CustomBadge1;

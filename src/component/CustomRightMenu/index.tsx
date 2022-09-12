import React , { useState , useRef , useEffect } from 'react'

import "./index.sass"

type Props = {

    bg_color? : string,
    bg_hover? : string,

    text_color? : string,
    text_hover? : string,

}

const index = ({ 

    bg_color = "#ebeef0",
    bg_hover = "#ffffff",

    text_color = "#878c9a",
    text_hover = "#34323a",

} : Props) => {

    const selectMenuRef = useRef();

    const [isHover, setIsHover] = useState(false);
    const [isActiveMenu , setIsActiveMenu ] = useState(false);

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

    useEffect(() => {

        document.addEventListener("mousedown", (e) => {

            if (!selectMenuRef?.current?.contains(e.target)) {
                setIsActiveMenu(false);
            }


        });

    }, []); 

    return (

        <main id="customRightMenu">

            <button 

                style={ButtonStyle}

                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}

                onClick   ={

                    (e) => setIsActiveMenu(!isActiveMenu)

                }

                id="customButton3"
            >

                <i className="fa-solid fa-bars"></i>

            </button>

            {
                isActiveMenu && 

                <div className="content" ref={selectMenuRef}>

                    <button 

                        style={ButtonStyle}

                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}

                        onClick   ={

                            (e) => setIsActiveMenu(!isActiveMenu)

                        }

                        id="customButton3"
                    >

                        <i className="fa-solid fa-xmark"></i>

                    </button>
                    
                </div>
            }

        </main>


    )

}

export default index
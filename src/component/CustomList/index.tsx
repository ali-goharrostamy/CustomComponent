import React, { CSSProperties }      from 'react'

import "./index.sass"

type Props = {

    items : {
        item : number
    }[],

    step? : number,

    colors? :
    {
        finished?: string,
        current ?: string,
        forward ?: string,
    },

    bgColors? :
    {
        finished?: string,
        current ?: string,
        forward ?: string,
    },
} 

const CustomList = ({

    step     ,
    items    ,
    colors   ,
    bgColors,

}: Props) => {

    const styleforward = {
        color           : colors?.forward    ? colors.forward    : "#666666", 
        backgroundColor : bgColors?.forward ? bgColors.forward : "#333333",
    } as React.CSSProperties

    const stylecurrent = {
        color           : colors?.current    ? colors.current    : "#000000", 
        backgroundColor : bgColors?.current ? bgColors.current : "#dddddd",
    } as React.CSSProperties

    const stylefinished = {
        color           : colors?.finished    ? colors.finished    : "#ffffff", 
        backgroundColor : bgColors?.finished ? bgColors.finished : "#444444",
    } as React.CSSProperties


    function styleState (value:Number) {

        var fin : {}

        if(step && value == (step - 1)) {

            fin = stylecurrent;

        } else if (step && value <= (step - 1)) {

            fin = stylefinished;

        } else {

            fin = styleforward;
        }

        return fin
    }

    return (

        <div id="customList">

            <div className="content">

                {
                    items.map((item, index) => (

                        <>
                            <div
                                style={

                                    styleState(index)
                                }

                                key={index}
                            >
                                { item.item }
                            </div>
                            <div 
                                className="line"
                                style={styleState(index)}
                            ></div>
                        </>
                    ))
                }

            </div>

        </div>

    )

}

export default CustomList
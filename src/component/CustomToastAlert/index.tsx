import classNames from 'classnames';
import React, { CSSProperties, useCallback, useEffect } from 'react';

import "./index.sass"

type Props = {

    listOfToast : {

        id    : number, // !IMPORTANT
        title : string, // !IMPORTANT

        type            ? : string,
        textColor       ? : string,
        discription     ? : string,
        backgroundColor ? : string,
    }[]

    position  ? : string,
    closeTime ? : number,

    setList     : Function
}

const index = ({

    setList    ,
    position   ,
    closeTime  ,
    listOfToast,


}: Props) => {

    const positionClass = classNames (
        "contentBody",
        position ?
        {
            "topRight" : position !== "top-left"     &&
                         position !== "bottom-left"  &&
                         position !== "bottom-right",

            "topLeft"     : position === "top-left"    ,
            "bottomLeft"  : position === "bottom-left" ,
            "bottomRight" : position === "bottom-right",

        } : "topRight"
    )

    function boxClass( type? : String ) {

        const typeClass = classNames (
            
            "contentBox",
            {
                "info"    : type === "info"   ,
                "danger"  : type === "danger" ,
                "success" : type === "success",
                "warning" : type === "warning",

                "default" : type !== "info"    &&
                            type !== "danger"  &&
                            type !== "success" &&
                            type !== "warning"
            }
        )
        return typeClass
    }


    const deleteToast = useCallback ( ( id : Number ) => {

        const tostListItem = listOfToast.filter((e:{ id : Number }) => e.id !== id)

        setList(tostListItem)

    }, [ listOfToast, setList ])

    useEffect(() => {

        const interval = setInterval(() => {


            if(listOfToast.length) {

                deleteToast(listOfToast[0].id)
            }
        }, closeTime && closeTime >= 1000 ? closeTime : 3000)

        return () => {

            clearInterval(interval)
        }
    }, [ listOfToast ])

    function toastStyle(

        t_color? : String,
        b_color? : String,

    )  {
        return {
            color           : t_color ? t_color : "",
            backgroundColor : b_color ? b_color : "",
        } as CSSProperties
    }

    return (

        <div id="myCustomToastAlert">

            <div className={positionClass}>
                {
                    listOfToast.map((toast, index) => (

                        // listOfToast.indexOf(toast) >= 1 ? "" :

                        <div
                            key={`index ${index}`}
                            style={
                                toastStyle(toast.textColor, toast.backgroundColor)
                            }
                            className={boxClass(toast.type)}
                        >
                            <i 
                                className="fa-solid fa-xmark"
                                onClick={() => { deleteToast(toast.id) }}
                            />
                            <h4 className="title">
                                {toast.title}
                            </h4>
                            <p className="discription">
                                {toast.discription}
                            </p>
                            
                        </div>
                    )) 
                }
            </div>

        </div>
    )
}

export default index

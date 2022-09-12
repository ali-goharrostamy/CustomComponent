import React      from 'react'
import classNames from 'classnames'

import "./index.sass"

type Props = {

    type           ? : String
    color          ? : String
    header         ? : String
    description    ? : String
    backgroundColor? : String

    submitButton? : {

        text             : String,
        textColor      ? : String,
        backgroundColor? : String,
    }
    cancelButton? : {

        text             : String,
        textColor      ? : String,
        backgroundColor? : String,

    }
    submitOnClick? : Function
    cancelOnClick? : Function

    isActiveModal : Boolean
}

const index = ({

    type           ,
    color          ,
    header         ,
    description    ,
    submitButton   ,
    cancelButton   ,
    isActiveModal  ,
    cancelOnClick  ,
    submitOnClick  ,
    backgroundColor,

}: Props) => {

    const typeIcon = classNames (
        
        "fa-light",
        {
            "fa-circle-info"          : type === "info"   ,
            "fa-circle-check"         : type === "success",
            "fa-hourglass-end"        : type === "loading",
            "fa-circle-exclamation"   : type === "error"  ,
            "fa-triangle-exclamation" : type === "warning",
        }
    )

    const submitButtonStyle = {
        color           : submitButton?.textColor       ? submitButton.textColor       : "#ffffff",
        backgroundColor : submitButton?.backgroundColor ? submitButton.backgroundColor : "#237aff",
    } as React.CSSProperties

    const cancelButtonStyle = {
        color           : cancelButton?.textColor       ? cancelButton.textColor       : "#000000",
        backgroundColor : cancelButton?.backgroundColor ? cancelButton.backgroundColor : "#ff2d2d",
    } as React.CSSProperties

    const contentStyle = { 
        color           : color           ? color           : "#222222",
        backgroundColor : backgroundColor ? backgroundColor : "#ffffff",
    } as React.CSSProperties

    return (

        isActiveModal &&

        <div id="myCustomSweetAlert">

            <div
                style={contentStyle}
                className="modalContent"
            >
                {
                    typeIcon &&
                    <div className="modalIcon">
                        <i className={typeIcon} />
                    </div>
                }

                <h2 className="">
                    {
                        header ? header : ""
                    }
                </h2>

                <p className="">
                    {
                        description ? description : ""
                    }
                </p>

                <div className="modalFunctions">
                    {
                        submitButton &&
                        <div
                            className="button submitButton"
                            style={submitButtonStyle}
                            onClick={
                                () => {
                                    submitOnClick &&
                                    submitOnClick(true)
                                }
                            }
                        >
                            {submitButton.text}
                        </div>
                    }{
                        cancelButton &&
                        <div 
                            className="button cancelButton"
                            style={cancelButtonStyle}
                            onClick={
                                () => {
                                    cancelOnClick &&
                                    cancelOnClick(true)
                                }
                            }
                        >
                            {cancelButton.text}
                        </div>
                    }
                </div>

            </div>

        </div>

    )
}

export default index
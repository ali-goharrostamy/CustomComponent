import React from 'react'
import "./index.sass"

type Props = {

    title            : string,
    inputName?       : string,
    isChecked?       : string,
    className?       : string,
    inputValue?      : string,
    onCheckedChange  : Function,
}

const index = ({
    
    title,
    isChecked,
    inputName,
    className,
    inputValue,
    onCheckedChange,

}: Props) => {

    return (
        
        <section className={`${className ? className : "custom-checkBox-1-container"}`}>

            <label htmlFor={inputName}>{title}</label>

            <input

                id={inputName}
                type="checkBox"
                name={inputName}
                onChange={onCheckedChange()}
                value={inputValue}
                checked={isChecked ? true : false}

            />

        </section>
    )

}

export default index
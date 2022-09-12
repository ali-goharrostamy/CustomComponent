import React      from 'react'     ;
import classNames from "classnames";

import { useState, useEffect, useRef } from "react";

import "./index.sass";

type Props = {

    title        : any,
    onSelect     : any, 
    selected     : any,
    itemsList    : any,
    className    : any,
    defaultValue : any, 
}

const index = ({

    title       ,
    onSelect    , 
    selected    ,
    itemsList   ,
    className   ,
    defaultValue,

}: Props) => {

    const [isOpen, setIsOpen] = useState(false);

    const menuRef = useRef<HTMLInputElement | null>(null);


    useEffect(() => {

        document.addEventListener("mousedown", (e) => {

            if (!menuRef?.current.contains(e.target)) {
                setIsOpen(false);
            }
            
        });

    }, []);

    return (

        <section ref={menuRef} className={`${className ? className : "custom-dropDown-container"}`}>
            {/* dropdown */}
            <div
                className={"dd-selection " + (isOpen ? "visible" : "")}
                onClick={(e) => {
                    setIsOpen(!isOpen);
                }}
            >
                {!selected?.value ? defaultValue : selected.value}
            </div>
            <div className={classNames("dd-itemHolder", { "scale-up-ver-top": isOpen },"dropDown")}>
                {itemsList.map((item) => (
                    <div
                        key={item.value}
                        onClick={() => {
                        onSelect(item);
                        setIsOpen(false);
                        }}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </section>
    )

}

export default index
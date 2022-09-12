import React from 'react'
import { useState } from 'react';
import { Link     } from "react-router-dom";

import "./index.sass";

type Props = {

    items : {
        title : string,
        text? : string,
        path  : string,
    }[],

    selected? : string,
    onChange? : Function
}

const customTopMenu = ({ items, selected, onChange}: Props) => {

    const [isActive , setIsActive] = useState("");

    return (

        <section id="custom_top_menu">

            {items.map((item, index) => (

                // <div className={selected.path === item.path ? "nav_item" : "nav_item active"} onClick={ (e) => {
                <div className={`nav_item ${isActive === item.path || selected === item.path ? "active" : ""}`} key={index} onClick={ (e) => {
                    // console.log(item)
                    setIsActive(item.path)
                    onChange && onChange(item)
                }}>
                    <h4>
                        {item.title}
                    </h4>
                    <p>
                        {item.text}
                    </p>
                </div>
            ))}
            
        </section>
    )
}

export default customTopMenu
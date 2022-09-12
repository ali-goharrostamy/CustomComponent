import React from 'react'
import { useState } from "react";

import CustomButton from "../CustomButton"

import "./index.sass";

type Props = {

    links : {

        text : string,} [],
}

const index = ({ links }: Props) => {

    const [isSelected, setIsSelected] = useState("")

    return (

        <nav id="customTopRow">

            <div className="navDiv">

                {links.map((link, index) => (

                    <CustomButton 
                        text={link.text} 
                        selected = {isSelected}
                        onChange = {(item:any) => {}}
                        // onChange = {(item:any)=> {setSelectedTopMenu(item)}}
                    />
                ))}

            </div>

            <div className="navDiv">

                <CustomButton text={"Log out Button"} />

            </div>

        </nav>

    )

}

export default index
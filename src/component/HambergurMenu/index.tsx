import React from 'react'

import reactLogo from '../../assets/react.svg'

import CustomButton2 from "../CustomButton2"
import CustomInput   from "../CustomInput"

import "./index.sass"

type Props = {}

const index = (props: Props) => {

    return (

        <nav id="customNavBar">

            <div className="rightSide">

                <CustomButton2 icon={"fa-solid fa-message-lines"} />
                <CustomButton2 icon={"fa-solid fa-user"         } />
                <CustomButton2 icon={"fa-solid fa-sun-bright"   } />
                <CustomButton2 icon={"fa-solid fa-chart-mixed"  } />

            </div>


            <div className="logo">

                <img src={reactLogo} alt="" />

            </div>


        </nav>

    )
}

export default index
import React from 'react'

import { Desktop, Mobile, Tablet } from "../../layout/BreakPoints";

import reactLogo from '../../assets/react.svg'

import CustomRightMenu from "../CustomRightMenu"
import CustomButton2 from "../CustomButton2"
import CustomInput   from "../CustomInput"

import "./index.sass"

type Props = {}

const index = (props: Props) => {

    return (

        <nav id="customNavBar">

            <div className="rightSide">

                <Desktop>

                    <CustomButton2 icon={"fa-solid fa-message-lines"} />
                    <CustomButton2 icon={"fa-solid fa-user"         } />
                    <CustomButton2 icon={"fa-solid fa-sun-bright"   } />
                    <CustomButton2 icon={"fa-solid fa-chart-mixed"  } />

                    <CustomInput />

                </Desktop>

                <Tablet>

                    <CustomRightMenu />

                    <CustomButton2 icon={"fa-solid fa-message-lines"   } />
                    <CustomButton2 icon={"fa-solid fa-user"            } />
                    <CustomButton2 icon={"fa-solid fa-sun-bright"      } />
                    <CustomButton2 icon={"fa-solid fa-chart-mixed"     } />
                    <CustomButton2 icon={"fa-solid fa-magnifying-glass"} />

                </Tablet>

                <Mobile>

                    <CustomButton2 icon={"fa-solid fa-bars"            } />
                    <CustomButton2 icon={"fa-solid fa-message-lines"   } />
                    <CustomButton2 icon={"fa-solid fa-user"            } />
                    <CustomButton2 icon={"fa-solid fa-sun-bright"      } />
                    <CustomButton2 icon={"fa-solid fa-chart-mixed"     } />
                    <CustomButton2 icon={"fa-solid fa-magnifying-glass"} />

                </Mobile>

            </div>


            <div className="logo">

                <img src={reactLogo} alt="" />

            </div>


        </nav>

    )
}

export default index
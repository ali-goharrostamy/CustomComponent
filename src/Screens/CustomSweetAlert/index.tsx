import {useState} from 'react'

import {

    CustomSweetAlert,

} from "../../component"


function index() {

    const [isActiveModal, setIsActiveModal] = useState(false)

    return (

        <div className='center-all'>

            <button onClick={() => {

                    setIsActiveModal(!isActiveModal)
                }
            }>
                click me
            </button>

            <CustomSweetAlert
                isActiveModal={isActiveModal}

                type         = "error" // success info warning error loading
                header       = "Arash Goharrostami"
                description  = "lorme for description is just test no more else... "

                color="#aaa"
                backgroundColor="#444"

                submitButton = {{ 
                    text            : "click me",
                    textColor       : "#333333" ,
                    backgroundColor : "#ffffff" ,
                }}
                submitOnClick = {
                    (e:Function) => {
                        console.log(e)
                        // setIsActiveModal(!isActiveModal)
                    }
                }
                cancelButton = {{ 
                    text            :"Cancel Button",
                    textColor       : "#ffffff"     ,
                    backgroundColor : "#333333"     ,
                }}
                cancelOnClick = {
                    (e:Function) => {
                        console.log(e)
                        setIsActiveModal(!isActiveModal)
                    }
                }
            />

        </div>
    )
}

export default index
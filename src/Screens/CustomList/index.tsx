import {useState} from 'react'

import {

    CustomList,

} from "../../component"


function index() {

    const arrayOfItems = [
        
        { item : 1 },
        { item : 2 },
        { item : 3 },
        { item : 4 },
        { item : 5 },
        { item : 6 },
        { item : 7 },
    ]

    return (

        <div className='center-all'>

            <CustomList 
                items = { arrayOfItems }
                step  = { 4 }

                colors = {{
                    finished : "red" ,
                    current  : "white",
                    forward  : "yellow",
                }}

                bgColors={{
                    finished : "aqua",
                    current  : "purple",
                    forward  : "brown",
                }}
            />

        </div>
    )
}

export default index
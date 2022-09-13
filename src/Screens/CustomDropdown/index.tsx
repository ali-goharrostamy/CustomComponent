import {useState} from 'react'

import {

    CustomDropdown,

} from "../../component"


function index() {
    
    const [
        onChangeDropdown,
        setOnChangeDropdown
    ] = useState<{
        title : string,
        value : number,
    }>();

    const items = [

        {title: "Ali"  , value: 1},
        {title: "Arash", value: 2},
        {title: "Parsa", value: 3},
        {title: "Mehdi", value: 4},
    ]

    const item = {
        title : "Arash", value: 2
    }
    
    return (

        <div className='center-all'>

            <CustomDropdown
                items={ items }
                placeHolder = "hello world"
                defaultItem = {item}
                onChange = {
                    (item:{
                        title : string,
                        value : number,
                    }) => {
                        setOnChangeDropdown(item)
                    }
                }
            />

        </div>
    )
}

export default index
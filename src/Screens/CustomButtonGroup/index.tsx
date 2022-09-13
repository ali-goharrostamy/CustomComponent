import {useState           } from 'react'

import {

    CustomButtonGroup,

} from "../../component"


function index() {

    const [
        onChengeCustomButtonGroup,
        setOnchengeCustomButtonGroup
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

    return (

        <div className='center-all'>

            <CustomButtonGroup
                items     = {items}
                selected  = {onChengeCustomButtonGroup}
                onChange  = {
                    (item:{title:string,value:number}) => {
                        setOnchengeCustomButtonGroup(item)
                        console.log(item)
                    }
                }
                // textColor       = "#22ffff"
                // selectedColor   = "#ff0000"
                // backgroundColor = "#00ff00"
            />

        </div>
    )
}

export default index
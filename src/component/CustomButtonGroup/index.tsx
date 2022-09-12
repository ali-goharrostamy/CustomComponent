import React      from 'react'

import "./index.sass"

type Props = {

    items : {

        title : string,
        value : number,

    } [],

    selected? : {

        title : string,
        value : number,
    },

    onChange : Function,

    textColor?       : string,
    selectedColor?   : string,
    backgroundColor? : string,

}

const index = ({

    items           ,
    selected        ,
    onChange        ,
    textColor       ,
    selectedColor   ,
    backgroundColor ,

}: Props) => {

    const ButtonStyle = {

        color           : textColor       ? textColor       : "#ffffff" , 
        backgroundColor : backgroundColor ? backgroundColor : "#057afc" ,
    };

    const selectedStyle = {

        backgroundColor : selectedColor ? selectedColor : "gray",
    }

    return (

        <div id="customButtomList">

            {
                items.map((item, index) => (

                    <button

                        key  ={index}
                        style={

                            selected?.title === item.title &&
                            selected?.value === item.value  ?

                                selectedStyle
                            :
                                ButtonStyle
                        }
                        onClick={ () => {
                            onChange(item)
                        }}
                    >

                        {item.title}

                    </button>

                ))
            }

        </div>
        
    )
}

export default index
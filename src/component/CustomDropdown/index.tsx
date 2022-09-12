import React      from "react";
import classNames from "classnames";

import { useRef    } from "react";
import { useState  } from "react";
import { useEffect } from "react";

import "./index.sass";
import { NULL } from "sass";

type props = {

    items : {
        title : string,
        value : number,
    }[],

    defaultItem? : {
        title : string,
        value : number,
    },

    placeHolder? : string,

    onChange : Function

}

const CustomDropDown = ({

    items      ,
    onChange   ,
    placeHolder = "انتخاب",
    defaultItem,

} : props) => {

    const [

        selectedItem, 
        setSelectedItem

    ] = useState<{

        title : string,
        value : number,

    }>( defaultItem ? {

        title : defaultItem?.title ,
        value : defaultItem?.value

    } : undefined);

    const selectSearchRef = useRef()

    const [isActiveDropdown, setIsActiveDropdown] = useState(false);

    useEffect(() => {

        // document.addEventListener("mousedown", (e) => {

        //     if (!selectSearchRef?.current?.contains(e.target)) {
        //         setIsActiveDropdown(false);
        //     }

        // });

    }, []);

    const markClass = classNames(
        "fa-solid",
        selectedItem ? "fa-xmark" :
        {
            "fa-chevron-up"   : isActiveDropdown === true ,
            "fa-chevron-down" : isActiveDropdown === false,
        }
    )

    return (

        <main id="customDropdown" >

            <div 
                // ref={selectSearchRef}
                className="customDropdownButton" 
                onClick={
                    () => setIsActiveDropdown(!isActiveDropdown)
                }
            >
                <span className="buttenText">
                    {
                        selectedItem ? selectedItem.title : placeHolder
                    }
                </span>
                {
                    <i className={markClass} 
                        onClick={
                            (e) => e.target.classList.contains("fa-xmark")?
                                setSelectedItem(null) : ""
                        }
                    />
                }
            </div>

            {isActiveDropdown && 

                <div className="customDropdownContent">

                    {
                        items.map((item, index) => (
                            <div 
                                key       ={`item-${index}`}
                                className ="dropdownItem" 
                                onClick   ={(e) => {

                                    onChange(item)
                                    setIsActiveDropdown(!isActiveDropdown)
                                    setSelectedItem(item)
                                }
                            }>
                                {item.title}
                            </div>
                        ))
                    }
                </div>
            }

        </main>

    );
};

export default CustomDropDown;

import {useState} from 'react'

import CustomToastAlert  from "../../component/CustomToastAlert"

function index() {

    const [toastList, setToastList] = useState<{

        id    : number, // !IMPORTANT
        title : string, // !IMPORTANT

        type            ? : string,
        textColor       ? : string,
        discription     ? : string,
        backgroundColor ? : string,

    }[]>([])

    const showToast = ({ 

        id             ,
        type           ,
        title          ,
        textColor      ,
        discription    ,
        backgroundColor,

    } : {

        title : string,
        
        id              ? : number, 
        type            ? : string,
        textColor       ? : string,
        discription     ? : string,
        backgroundColor ? : string,

    }) => {

        setToastList([...toastList, {

            id              : toastList.length + 1,
            type            : type                ,
            title           : title               ,
            textColor       : textColor           ,
            discription     : discription         ,
            backgroundColor : backgroundColor     ,
        }])
    }

    return (

        <div className='center-all'>

            <button 
                className="tostBTN"
                onClick={() => {showToast({

                            type            : "Success", 
                            title           : "Arash",
                            // discription     : "Goharrost yyyyyyyyy yyyyyyyyyy yyyyyyyyyy ere fdf fdsdfd dfd fsfethjkn fdf  df sdfdfs ghjg mi",
                            // backgroundColor : "green",
                            // textColor       : "white",
                        })
                    }
                }
            >Success</button>

            <button
                className="tostBTN"
                onClick={() => {showToast({

                            type            : "danger", 
                            title           : "Danger",
                            discription     : "This is danger message...",
                        })
                    }
                }
            >Danger</button>

            <button
                className="tostBTN"
                onClick={() => {showToast({

                            type            : "warning", 
                            title           : "Warnig",
                            discription     : "This is your Danger message for end-user !!!",
                        })
                    }
                }
            >Warning</button>

            <button
                className="tostBTN"
                onClick={() => {showToast({

                            type            : "info", 
                            title           : "Info Title",
                            discription     : "!!!",
                        })
                    }
                }
            >info</button>

            <CustomToastAlert listOfToast={toastList} setList={setToastList} position="top-right"/>

        </div>
    )
}

export default index
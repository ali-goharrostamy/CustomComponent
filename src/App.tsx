import {useState           } from 'react'
import {Routes, Route, Link} from "react-router-dom";

import {ToastContainer, toast} from 'react-toastify';

import CustomList        from "./component/CustomList"
import CustomButton      from "./component/CustomButton"
import CustomDropdown    from "./component/CustomDropdown"
import CustomToastAlert  from "./component/CustomToastAlert"
import CustomSweetAlert  from "./component/CustomSweetAlert"
import CustomButtonGroup from "./component/CustomButtonGroup"

function App() {

    const [isActiveModal, setIsActiveModal] = useState(false)

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

    const [
        onChengeCustomButtonGroup,
        setOnchengeCustomButtonGroup
    ] = useState<{
        title : string,
        value : number,
    }>();

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

    const text = "Arash Goharrostmi"

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

        <>

            <CustomToastAlert listOfToast={toastList} setList={setToastList} position="top-right"/>

            <ul className="routesLink">

                <li><Link to="/customSweetalert"  > CustomSweetAlert  </Link></li>
                <li><Link to="/customDropdown"    > CustomDropdown    </Link></li>
                <li><Link to="/customTostAlert"   > CustomTostAlert   </Link></li>
                <li><Link to="/customButton"      > CustomButton      </Link></li>
                <li><Link to="/customButtonGroup" > CustomButtonGroup </Link></li>
                <li><Link to="/customList"        > CustomList        </Link></li>

            </ul>

            <div className='center-all'>

                <Routes>

                    <Route 
                        path="/customSweetalert" 
                        element={
                            <>
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
                            </>
                        }
                    />

                    <Route 
                        path="/customDropdown"
                        element = {
                            <CustomDropdown
                                items={ items }
                                placeHolder = "hello world"
                                // defaultItem = {item}
                                onChange = {
                                    (item:{
                                        title : string,
                                        value : number,
                                    }) => {
                                        setOnChangeDropdown(item)
                                    }
                                }
                            />
                        }
                    />

                    <Route
                        path="/customTostAlert"
                        element = {
                            <>
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

                            </>
                        }
                    />

                    <Route
                        path="/customButton"
                        element = {
                            <CustomButton
                            //Text, title
            
                                title = { text }
                                type  = "primary"
            
                                // isLoading
                                // isDisable = {true}
                                
                                onClick={(item:number) => {
                                    console.log(item)
                                }}
                                
                                // isOutline = {true}
            
                                // leftIcon  = "fa-solid fa-message-lines"
                                rightIcon = "fa-solid fa-message-lines"
                            />
                        }
                    />

                    <Route
                        path="/customButtonGroup"
                        element = {
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
                        }
                    />

                    <Route
                        path="/customList"
                        element = {
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
                        }
                    />

                </Routes>

            </div>
        </>
    )
}

export default App
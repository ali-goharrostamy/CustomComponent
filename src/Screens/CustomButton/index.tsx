import { CustomButton } from "../../component"

function index() {

    const text = "Arash Goharrostmi"

    return (
        <div className='center-all'>

            <CustomButton

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
            
        </div>

    )
}

export default index
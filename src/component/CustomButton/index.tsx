import React from 'react'
import classNames from 'classnames'

import "./index.sass"

type Props = {

    title    ? : string,
    type     ? : string,
    leftIcon ? : string,
    rightIcon? : string,

    isOutline? : boolean,
    isLoading? : boolean,
    isDisable? : boolean,

    onClick : Function,
}

const index = ({

    type     ,
    title    ,
    onClick  ,
    leftIcon ,
    isDisable,
    rightIcon,
    isLoading,
    isOutline,

} : Props) => {

    const styles = classNames (
        "noselect",
        type && ( !isLoading && !isDisable ) ? type : "secondary",
        {
            "disabel" : isDisable === true || isLoading === true,
            "outLine" : isOutline === true,
        }
    )

    return (

        <div 
            id="customButton"
            className={styles}
            onClick={ () => {
                if(!isDisable && !isLoading) onClick(title);
            }}
        >
            { rightIcon &&

                <div className="icon">
                    <i className={rightIcon} />
                </div>
            }

            { title && 

                <div className="text">
                    {
                        isLoading &&
                        <i className="fa-duotone fa-spinner" />
                    }
                    <span>
                        {title}
                    </span>
                </div>
            }

            { leftIcon  &&

                <div className="icon">
                    <i className={leftIcon} />
                </div>
            }
        </div>
    )
}

export default index
import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames';

const Button = ({ children, className, active, linkto }) => {
    return (
        <Link to={linkto} >
            <div
                className={classNames(
                    "text-center text-[16px] px-6 py-[10px] rounded-[4px] font-semibold transition-all duration-200 hover:scale-95",
                    {
                        "bg-[#FFD60A] text-black": active,
                        "bg-[#161D29] text-white": !active
                    }, className
                )}
            >
                {children}
            </div>
        </Link>
    )
}

export default Button
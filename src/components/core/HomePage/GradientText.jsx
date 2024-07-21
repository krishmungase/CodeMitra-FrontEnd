import React from 'react'

const GradientText = ({ text }) => {
    return (
        <>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1FA2FF] to-[#A6FFCB]">
                {text}
            </span>
        </>
    )
}

export default GradientText;
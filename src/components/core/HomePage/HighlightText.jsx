import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-pink-200">
        {" "}
        {text}
    </span>
  )
}

export default HighlightText

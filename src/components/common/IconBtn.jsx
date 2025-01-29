import React from "react";
import { LiaEdit } from "react-icons/lia";

const IconBtn=(
    {
        text,onClick,children,disabled,outline=false,customClasses="",type,
    }
)=>{
    return(
        <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className="bg-yellow-50 text-black  text-sm font-semibold px-3 py-2 rounded flex flex-row gap-1"
        >
            {   
                children ?(
                    <>
                   
                    <span>
                        {text}
                        
                    </span>  
                  
                   

                    {children}
                    </>
                ):(text)
            }
         
           
           
        </button>
    )
}
export default IconBtn;
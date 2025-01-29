import React from "react";
import HighlightText from "../HomePage/HighlightText";

const Quote=()=>{
    return(
        <div className="font-bold text-[34px] py-6  ml-[210px]">
            We are passionate about revolutionizing the way we learn.Our innovation plateform
            <HighlightText text={"combines technology"}/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-50 to-pink-500">
                {" "}
                expertise
            </span>
            , and community to create an 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-50 to-pink-500"> unparalleled educational experience. </span>
        </div>
    );
}
export default Quote; 
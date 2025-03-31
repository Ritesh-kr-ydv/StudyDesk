import React from 'react'
import CTAButton from "../HomePage/Button"
import HighlightText from './HighlightText'
import {FaArrowRight} from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'
import { useState, useEffect } from "react";

const useMediaQuery = (width) => {
    const [md, setMd] = useState(window.innerWidth > width);
  
    useEffect(() => {
      const handleResize = () => {
        setMd(window.innerWidth > width);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [width]);
  
    return md;
  };
  
const CodeBlocks = ({
    position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroudGradient, codeColor
}) => {
      const md=useMediaQuery(600);
  return (
    <div className={`flex ${position} my-20 grid md:grid-cols-2 gap-10`}>
      
    {/*Section 1*/}
    <div className=' flex flex-col gap-8'>
        <p className='text-center md:text-left'>
        {heading}
        </p>
        
        <div className='text-richblack-300 text-center text-sm md:text-base md:text-left font-bold '>
            {subheading}
        </div>

        <div className='flex  justify-center items-center md:justify-start md:items-start gap-7 mt-7'>
            <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                <div className='flex gap-2 items-center'>
                    {ctabtn1.btnText}
                    <FaArrowRight/>
                </div>
            </CTAButton>

            <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>  
                    {ctabtn2.btnText}
            </CTAButton>
        </div>


    </div>

     {/*Section 2*/}
     <div className=' h-fit   flex flex-row  w-[100%] py-4 lg:w-[500px]'> 
        {/*HW -> BG gradient*/}

        <div className='text-center flex flex-col text-10[px] w-[10%] text-richblack-400 font-inter font-bold'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
        </div>

        <div className={`w-[90%] flex flex-col gap-2 font-semibold md:font-bold font-mono ${codeColor} pr-2`}>
           <TypeAnimation
            sequence={[codeblock, 2000, ""]}
            repeat={Infinity}
            cursor={true}
           
            style = {
                {   
                    whiteSpace: "pre-line",
                    display:"block",
                    fontSize: !md ? "0.875em" : undefined, // Apply 0.875em only if md is false
                }
            }
            omitDeletionAnimation={true}
           />
        </div>

     </div>


    </div>
  )
}

export default CodeBlocks

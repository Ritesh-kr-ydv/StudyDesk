import React from "react";
import OtpInput from "react-otp-input"
import { useDispatch } from "react-redux";
import {useNavigate,useNavigation} from "react-router-dom"
import {Link} from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { sendOtp } from "../services/operations/authAPI";
import { signUp } from "../services/operations/authAPI";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuTimerReset } from "react-icons/lu";
import OTPInput from "../components/common/OTPInput";

const VerifyEmail=()=>{
    const {loading,signupData}=useSelector((state)=>state.auth);
    const [otp,setOtp]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
         if(!signupData){
            navigate("/signup");
         }
    },[])

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        const {
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        } =signupData;
        dispatch(signUp(accountType,firstName,lastName,email,password,confirmPassword,otp,navigate));
    }
    
    return(
        <div className="text-white">
            {
                loading ?
                (<div>Loading...</div>)
                :(<div className="flex flex-col justify-center items-center mt-[200px] gap-2">
                    <h1 className="font-bold text-[22px] text-richblack-100 mr-[240px]">Verify Email</h1>
                    <p className="text-richblack-600 w-[400px] text-sm ml-11 mb-7">A verification code has been sent to you.Enter the code below</p>
                    <form onSubmit={handleOnSubmit}>

                     <OTPInput otp={otp} setOtp={setOtp} />



                      <button type="submit" className="bg-yellow-50 text-black px-4 py-2 rounded w-[350px] mt-4 ">
                       Verify Email
                      </button>

                    </form>
                    <div className="flex flex-row gap-[90px] text-richblack-100">
                        <div className="flex flex-row gap-3">
                            <span className="flex items-center"><FaArrowLeftLong /></span> 
                        <div>
                            <Link to="/login">
                           <p>Back to Login</p> 
                            </Link>
                        </div>
                        </div>
                           <div className="flex flex-row gap-2">
                           <span className="flex items-center"><LuTimerReset /></span> 
                           <button onClick={()=>dispatch(sendOtp(signupData.email,navigate))} >
                            Resend OTP
                            </button>
                           </div>
                        
                           
                    </div>
                </div>)

            }

        </div>
    );
}
export default VerifyEmail;
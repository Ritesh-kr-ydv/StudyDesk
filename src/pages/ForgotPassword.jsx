import React from "react";
import {Link} from "react-router-dom"
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getPasswordResetToken} from "../services/operations/authAPI";
import { FaArrowLeftLong } from "react-icons/fa6";

const ForgotPassword=()=>{
    const [email,setEmail]=useState("");
    const [emailSent,setEmailSent]=useState(false);
    const {loading}=useSelector((state)=>state.auth);
    const dispatch = useDispatch();

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        dispatch(getPasswordResetToken(email,setEmailSent));
    }
    return(
    <div className="text-white  ">
      {
        loading ? (
            <div>Loading..</div>
        )
        :(
            <div className="flex flex-col justify-center items-center mt-[180px] gap-3 ">
                <h1 className="font-bold text-[20px] text-richblack-100 mr-[150px]">
                    {
                        !emailSent ? "Reset your Password":" Check your Eamil"
                    }
                </h1>
                <p className="text-richblack-600 w-[400px] text-sm ml-11">
                    {
                        !emailSent ? "Have no fear,we'll email you instructions to reset your password.If you don't have access your email we can try accout recovery":
                        `We have sent the reset eamil ${email}`
                    } 
                </p>
                <form onSubmit={handleOnSubmit} className="flex flex-col gap-3 w-[350px] mt-[23px]">
                    {
                        !emailSent && (

                            <label>
                             <p className="text-richblack-200 text-sm">Email Address*</p>
                             <input
                              required
                              type='email'
                              name='email'
                              value={email}
                              onChange={(e)=>setEmail(e.target.value)}
                              placeholder='Enter Your Email Address'
                               className=" rounded px-2 py-2 bg-richblack-800 w-[350px]   flex items-center"
                             />
                            </label>
                        )
                    }
                    <button type='submit' className="bg-yellow-50 text-black px-4 py-2 rounded ">
                        {
                            !emailSent ? "Reset Password":"Resent Email"
                        }
                    </button>
                </form>
                <div className="text-richblack-100 mr-[230px] flex flex-row gap-2">
                    <span className="flex items-center"><FaArrowLeftLong /></span>
                    <Link to="/login">
                    <p>Back to Login</p>
                    </Link>
                    
                </div>
            </div>
        )
      }
    </div>
    );
}
export default ForgotPassword; 
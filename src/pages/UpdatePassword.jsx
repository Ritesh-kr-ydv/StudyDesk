import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import { resetPassword } from "../services/operations/authAPI";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const UpdatePassword=()=>{
    const dispatch =useDispatch();
    const location=useLocation();
    const [formData,setFormData]=useState({
        password:"",
        confirmPassword:"",
    })
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);
    const {loading} =useSelector((state)=>state.auth);
    const {password,confirmPassword}=formData;

    const handleOnChange=(e)=>{
        setFormData((prevData)=>(
            {
                ...prevData,
                [e.target.name]:e.target.value,
            }
        ))
    }
    const handleOnSubmit =(e)=>{
        e.preventDefault();
        const token=location.pathname.split('/').at(-1);
        dispatch(resetPassword(password,confirmPassword,token))
    }
    return(
        <div className="text-white  ">
            {
                loading ?(<div>Loading...</div>):
                (
                    <div className=" flex  flex-col justify-center items-center mt-[160px]">
                        <h1  className="font-bold text-[20px] text-richblack-100 mr-[150px]">Create New Password</h1>
                        <p className="text-richblack-600 w-[400px] text-sm ml-11 mb-7">Almost done.Enter your new password and yours all set.</p>
                        <form onSubmit={handleOnSubmit}>
                            <label>
                                <p className="text-richblack-200 text-sm">New Password*</p>
                                <div className=" relative flex flex-row mb-4" >
                                <input
                                required
                                type={showPassword?"test":"password"}
                                name='password'
                                value={password}
                                onChange={handleOnChange}
                                placeholder='Password' 
                                className="rounded px-2 py-2 bg-richblack-800 w-[350px] "
                                />
                                <span
                                onClick={()=>setShowPassword((prev)=>!prev)} className=" absolute ml-[310px] mt-2">
                                    {
                                        showPassword ? <IoEye fontSize={24}/>:<IoMdEyeOff fontSize={24} />
                                    }
                                </span>
                                </div>
                               
                            </label>

                            <label>
                                <p className="text-richblack-200 text-sm">Confirm New Password*</p>
                                <div className=" relative flex flex-row ">
                                <input
                                required
                                type={showConfirmPassword?"test":"password"}
                                name='confirmPassword'
                                value={confirmPassword}
                                onChange={handleOnChange}
                                placeholder='Confirm Password'
                                 className="rounded px-2 py-2 bg-richblack-800 w-[350px]"
                                />
                                <span
                                onClick={()=>setShowConfirmPassword((prev)=>!prev)} className=" absolute ml-[310px] mt-2">
                                    {
                                        showConfirmPassword ? <IoEye fontSize={24}/>:<IoMdEyeOff fontSize={24} />
                                    }
                                </span>
                                </div>
                               
                            </label>
                    <button type="submit" className="bg-yellow-50 text-black px-4 py-2 rounded w-[350px] mt-6 mb-2">
                                Reset Password
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
    )
}
export default UpdatePassword;
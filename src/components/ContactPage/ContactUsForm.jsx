import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import CountryCode from "../../data/countrycode.json"




const ContactUsForm=()=>{
    const [loading,setLoading]=useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors,isSubmitSuccessful}
    }=useForm();

    useEffect(()=>{
        if(isSubmitSuccessful){
            reset({
                email:"",
                firstname:"",
                lastname:"",
                message:"",
                phoneNo:"",
            })
        }
    },[reset,isSubmitSuccessful]);

    const submitContactForm= async(data)=>{
        console.log("Logging Data",data);
        try{
            setLoading(true);
            const response={status:"OK"};
            console.log("Logging response",response);
            setLoading(false);

        }
        catch(error){
            console.log("error",error.message);
            setLoading(false);
        }

    }

    return(
       <form onSubmit={handleSubmit(submitContactForm)}>
        <div className="flex flex-col gap-12 mt-5 ">
        <div className="flex flex-row gap-[170px]">
            {/* firstname */}
            <div className="flex flex-col gap-1">
                <lable htmlFor='firstname'>First Name</lable>
                <input
                type='text'
                 name='firstname'
                 id='firstname'
                 placeholder='Enter First Name'
                 {...register("firstname",{required:true})}
                  className="bg-richblack-700 rounded p-2 "
                />
                {
                    errors.firstname && (
                        <span>Please Enter Your Name</span>
                    )
                }

            </div>
            {/* lastname */}
            <div className="flex flex-col gap-1">
                <lable htmlFor='lastname'>Last Name</lable>
                <input
                type='text'
                 name='lastname'
                 id='lastname'
                 placeholder='Enter Last Name'
                 {...register("lastname")}
                  className="bg-richblack-700 rounded p-2"
                />
               

            </div>
            </div>
            {/* email */}
            <div className="flex flex-col gap-1">
                <label htmlFor="email">Email Address</label>
                <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter email Address'
                {...register("email",{required:true})}
                 className="bg-richblack-700 rounded p-2"
                />
                {
                    errors.email && (
                        <span>
                            Please Enter Your Email Address
                        </span>
                    )
                }
            </div>

            {/* phonenumber */}
               <div className="flex flex-col gap-2 ">
                <label htmlFor="phonenumber">Phone Number</label>
                <div className="flex flex-row gap-6">
                    {/* dropdown */}
                  
                        <select
                         name='dropdown'
                         id='dropdown'
                         {...register("countrycode",{required:true})}
                           className="bg-richblack-700 rounded p-2"
                        >
                            {
                                CountryCode.map((element,index)=>{
                                    return (
                                        <option key={index} value={element.code }>
                                            {element.code}-{element.country}
                                        </option>
                                    )
                                })
                            }
                           
                        </select>

                        <input
                        type='number'
                        name='phonenumber'
                        id='phonenumber'
                        placeholder='12345 67890'
                        {...register("phoneNo",
                           {
                            required:{value:true, message:"Please enter your phone number"},
                            maxLength:{value:10, message:"Invalid Phone Number"},
                            minLength:{value:8, message:"Invalid Phone Number"}
                           } 
                        )}
                          className="bg-richblack-700 rounded p-2"
                        />
                        
                       
                   
                </div>
                {
                    errors.phoneNo && (
                        <span>
                            {errors.phoneNo.message}
                        </span>
                    )
                }
               </div>

            {/* message */}
            <div className="flex flex-col gap-1">
                <label>Message</label>
                <textarea
                 name="message"
                 id='message'
                 rows='7'
                 cols='30'
                 placeholder='Enter Your meassge here'
                 {...register("message",{required:true})}
                 className="bg-richblack-700 rounded p-2"
                />
                {
                    errors.message && (
                        <span>
                            Please Enter Your message
                        </span>
                    )
                }

                
            </div>
            <button type="submit" className="  bg-yellow-100 text-black font-semibold p-2 rounded  mx-[10px]">
              Send Message
        </button>

        </div>
       
       

        
       </form>
    );
}
export default ContactUsForm;
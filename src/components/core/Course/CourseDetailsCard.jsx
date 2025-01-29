import React from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import copy from "copy-to-clipboard"
import {toast} from "react-hot-toast"
import {ACCOUNT_TYPE} from "../../../utils/constants"
import { addToCart } from "../../../slices/cartSlice";
import { MdDoubleArrow } from "react-icons/md";
import { FaRegShareFromSquare } from "react-icons/fa6";


const CourseDetailsCard=({course,setConfirmationModal,handleBuyCourse})=>{
    const {
        thumbnail:ThumbnailImage,
        price:CurrentPrice,
    }=course;
    const {user}=useSelector((state)=>state.profile);
    const {token}=useSelector((state)=>state.auth);
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handleAddToCart=()=>{
        if(user && user?.accountType=== ACCOUNT_TYPE.INSTRUCTOR){
            toast.error("You are an Instructor,you can not buy a course");
            return;
        }
        if(token){
            dispatch(addToCart(course));
            return;
        }
        setConfirmationModal({
            text1:"You are not Logged in",
            text2:"Please log in to add to Cart",
            btnText1:"Login",
            btn2Text:"Cancel",
            btn1Handler:()=> navigate("/login"),
            btn2Handler:()=>setConfirmationModal(null),
        })

    }
    const handleShare=()=>{
        copy(window.location.href);
        toast.success("Link Copied to Clipboard")

    }
    return(
        <div className="flex flex-col gap-y-5 ">
            <img
             src={ThumbnailImage}
             alt='Thumbnail Image'
             className="max-h-[300px] min-h-[180px] w-[400px] rounded-xl"
            />
            <div className="font-bold text-2xl text-richblack-25">
                Rs. {CurrentPrice}
            </div>
            <div className="flex flex-col gap-y-2"> 
                    <button
                     onClick={
                        user && course?.studentsEnrolled.includes(user?._id) ? ()=>navigate("/dashboard/enrolled-courses"):
                        handleBuyCourse
                    }
                    className="bg-yellow-100 text-black p-2 rounded font-semibold"
                    >
                       
                        {
                            user && course?.studentsEnrolled.includes(user?._id) ? "Go to Course":
                            "Buy Now"

                        }
                    </button>
                    {
                        (!course?.studentsEnrolled.includes(user?._id) )&& (
                            <button onClick={handleAddToCart}   className="bg-richblack-800 text-white p-2 rounded font-semibold">
                                Add to Cart
                            </button>
                        )
                    }
            </div>
            <div>
                <p className="text-center text-richblack-200">30-Day Money-Back Gaurantee</p>
                <p className="font-bold text-[20px] text-richblack-25 mt-3">This Course Includes:</p>
                <div className="flex flex-col gap-y-3">
                    {
                     course?.instructions?.map((item,index)=>(
                        <p key={index}>
                            <div className="flex gap-1">
                            <span className="flex items-center justify-center text-caribbeangreen-300"><MdDoubleArrow /></span>
                            <span className="text-caribbeangreen-300">{item}</span>
                            </div>
                          
                        </p>
                     ))
                    }
                </div>
            </div>
            <div className="flex gap-2 justify-center items-center mb-3">
                <span   className="text-yellow-100  "><FaRegShareFromSquare /></span>
                <button
                onClick={handleShare}
                className="text-yellow-100 font-semibold ">

                    Share
                </button>
            </div>

        </div>
    )
}
export default CourseDetailsCard;
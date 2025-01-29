import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { buyCourse } from '../services/operations/studentFeaturesAPI';
import {fetchCourseDetails} from "../services/operations/courseDetailsAPI"
import Error from "../pages/Error"
import ConfirmationModal from "../components/common/ConfirmationModal"
import {formatDate} from "../services/formatDate"
import { useState,useEffect } from 'react';
import GetAvgRating from "../utils/avgRating"
import RatingStars from "../components/common/RatingStars"
import CourseDetailsCard from '../components/core/Course/CourseDetailsCard';
import { MdLanguage } from "react-icons/md";
import { MdOutlineMoreTime } from "react-icons/md";
import CourseAccordionBar from '../components/core/Course/CourseAccordionBar';


const CourseDetails = () => {

    const {user} = useSelector((state)=>state.profile);
    const {token} = useSelector((state)=>state.auth);
    const {loading}=useSelector((state)=>state.profile);
    const {paymentLoading}=useSelector((state)=>state.course);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {courseId}  = useParams();

    const [courseData,setCourseData]=useState(null);
    const [confirmationModal,setConfirmationModal]=useState(null);
    const [isActive,setIsActive]=useState(Array(0));
    const handleActive =(id)=>{
        setIsActive(
            !isActive.includes(id)
            ?isActive.concat(id)
            :isActive.filter((e)=>e!=id)
        )
    }

    useEffect(()=>{
        const getCourseFullDetails= async()=>{
           try{
              const result=await fetchCourseDetails(courseId);
              setCourseData(result);
           }
           catch(error){
          console.log("Could not fetch course details");
           }
        }
        getCourseFullDetails();
    },[courseId]);
    const [avgReviewCount,setAverageReviewCount]=useState(0);

    useEffect(()=>{
     const count=GetAvgRating(courseData?.data?.courseDetails?.ratingAndReviews);
     setAverageReviewCount(count);
    },[courseData]);

    const [totalNoOfLectures,setTotalNoOfLectures]=useState(0);
    useEffect(()=>{
        let lectures=0;
        courseData?.data?.courseDetails?.courseContent?.forEach((sec)=>{
            lectures+=sec.subSection.length || 0
        })
        setTotalNoOfLectures(lectures);
    },[courseData]);

    const handleBuyCourse = () => {
        
        if(token) {
            buyCourse(token, [courseId], user, navigate, dispatch);
            return;
        }
        setConfirmationModal({
            text1:"You are not Logged in",
            text2:"Please log in to purchase the course",
            btnText1:"Login",
            btn2Text:"Cancel",
            btn1Handler:()=> navigate("/login"),
            btn2Handler:()=>setConfirmationModal(null),

        })
    }
    if(loading || !courseData){
        return(
            <div>
                Loading...
            </div>
        )
    }
    if(!courseData.success){
        return(
            <div>
                <Error/>
            </div>
        )
    }
    const{
        _id:course_id,
        courseName,
        courseDescription,
        thumbnail,
        price,
        whatYouWillLearn,
        courseContent,
        ratingAndReviews,
        instructor,
        studentsEnrolled,
        createdAt,
    }= courseData.data?.courseDetails;


  return (
    <div className='flex  flex-col  text-white'>
        <div className="relative flex flex-col justify-start h-[440px] bg-richblack-800">
            <div className="mt-[130px] translate-x-[170px] flex flex-col gap-y-3">
                <h1 className="text-4xl font-bold">My Course</h1>
            <p className="text-richblack-400">{courseDescription}</p>
            <div className="flex gap-x-3">
                <span>{avgReviewCount}</span>
                <RatingStars Review_Count={avgReviewCount} Star_Size={24}/>
                <span>{`(${ratingAndReviews.length} Reviews)`}</span>
                <span>{`${studentsEnrolled.length} Students Enrolled`}</span>
            </div>
            <div>
               
               <p>Created By {`${instructor.firstName}`}</p>
            </div>
            <div className="flex gap-x-2">
            <span className="flex items-center justify-center text-xl translate-y-[-1px]"><MdOutlineMoreTime /></span>
                <p> Created At {formatDate(createdAt)}</p>
                <span className="flex items-center justify-center"><MdLanguage /></span>
                <p>
                    English
                </p>

            </div>
            <p className="font-semibold">{courseName}</p>
            </div>
           
           
            <div className=" w-[370px] absolute mt-[60px] translate-x-[910px] bg-richblack-700 p-4 rounded-md">
                    <CourseDetailsCard
                     course={courseData?.data?.courseDetails}
                     setConfirmationModal={setConfirmationModal}
                     handleBuyCourse={handleBuyCourse}
                    />
            </div>

        </div>
        <div className="mt-[50px] translate-x-[200px] border border-richblack-700 rounded w-[600px] flex flex-col items-start justify-center gap-y-3
        p-4">
            <p className="text-3xl ">What you'll learn</p>
            <div className="text-richblack-200">
                {whatYouWillLearn}
            </div>
        </div>
        <div className="mt-[40px] w-[600px] translate-x-[200px] mb-[1px]">
            <div>
                <p className="text-2xl font-semibold text-richblack-50 mb-3">Course Content:</p>
            </div>
            <div className="flex gap-x-3 justify-between">
                <div className="gap-x-2 text-richblack-200">
                    <span> Sections:{courseContent.length} |</span>
                    <span> Lectures:{totalNoOfLectures}</span>
                    <span> | Total length {courseData.data?.totalDuration}</span>
                    
                </div>
                <div>
                    <button onClick={()=>setIsActive([])} className="text-yellow-50">
                        Collapse all Sections
                    </button>

                </div>
            </div>
        </div>

         {/* Course Details Accordion */}
         <div className="py-4 w-[605px] mx-[200px]">
              {courseContent?.map((course, index) => (
                <CourseAccordionBar
                  course={course}
                  key={index}
                  isActive={isActive}
                  handleActive={handleActive}
                />
              ))}
            </div>

       
       {confirmationModal && <ConfirmationModal modalData={confirmationModal}/>}
    </div>
  )
}

export default CourseDetails

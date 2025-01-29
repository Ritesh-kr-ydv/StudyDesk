import React, { useState } from "react"
import { useSelector } from "react-redux";
import { fetchInstructorCourses } from "../../../../services/operations/courseDetailsAPI";
import { getInstructorData } from "../../../../services/operations/profileAPI";
import { useEffect } from "react";
import InstructorChart from "./InstructorChart";
import { Link } from "react-router-dom";
import { PiHandWavingFill } from "react-icons/pi";
const Instructor=()=>{
    const {user}=useSelector((state)=>state.profile);
    const {token}=useSelector((state)=>state.auth);
    const [loading,setLoading]=useState(false);
    const [instructorData,setInstructorData]=useState(null);
    const [courses,setCourses]=useState([]);

    useEffect(()=>{
        const getCourseDataWithStats=async()=>{
            setLoading(true);
            const instructorApiData=await getInstructorData(token);
            const result=await fetchInstructorCourses(token);
            console.log("InstructorAPIData",instructorApiData);
            if(instructorApiData.length){
                setInstructorData(instructorApiData)   
            }
            if(result){
                setCourses(result);
            }
            setLoading(false);
        }
        getCourseDataWithStats();

    },[]);
     console.log("InstructorData",instructorData);
     console.log("coursesData",courses)

    const totalAmount = instructorData?.reduce((acc,curr)=> acc + curr.totalAmountGenerated, 0);
    const totalStudents = instructorData?.reduce((acc,curr)=>acc + curr.totalStudentsEnrolled, 0);

    return(
        <div className="text-white p-8">
          <div>
            <div className="flex gap-x-2">
            <h1 className="text-2xl font-bold ">Hi {user?.firstName}</h1>
            <span className=" my-[-2px] text-3xl text-yellow-25"><PiHandWavingFill /></span>
            </div>
           
            <p className="text-richblack-300 mb-3">Let's start something new </p>
          </div>
          {
            loading ?(<div className="spinner"></div>)
            :courses.length>0
            ?(
               <div>
                 
                    <div className="flex gap-x-[20px] ">
                        <InstructorChart courses={instructorData}/>
                        <div className="bg-richblack-800 rounded p-4 w-[280px] ">
                            <div className="flex flex-col justify-center items-center">
                            <p className="font-bold text-richblack-50 text-2xl mb-6 mt-3">Statistics</p>
                            <div>
                                <p className="text-richblack-300 ">Total Courses</p>
                                <p className="font-bold text-richblack-50 text-2xl  mb-2">{courses.length}</p>
                            </div>
                            <div>
                                <p className="text-richblack-300 ">Total Students</p>
                                <p className="font-bold text-richblack-50 text-2xl  mb-2">{totalStudents}</p>
                            </div>
                            <div>
                                <p className="text-richblack-300 ">Total Income</p>
                                <p className="font-bold text-richblack-50 text-2xl ">Rs.{totalAmount}</p>
                            </div>
                            </div>
                           
                        </div>
                    </div>
                
                <div className="bg-richblack-800 rounded p-3 mt-8">
                    {/* 3 courses card */}
                    <div className="flex justify-between mb-3">
                        <p className="text-richblack-100 font-bold mx-5">Your Courses</p>
                        <Link to="/dashboard/my-courses">
                        <p className="text-yellow-50 font-semibold mx-[20px]">View all</p>
                        </Link>
                    </div>
                    <div className="flex gap-x-3 rounded items-center justify-center"> 
                        {
                            courses.slice(0,3).map((course,index)=>(
                                <div key={index} className="flex flex-col  p-1 ">
                                    <img
                                    src={course.thumbnail}
                                    className="w-[260px] rounded-md h-[180px] mb-1"
                                    />
                                    <div>
                                        <p className="text-richblack-50 font-semibold ">{course.courseName}</p>
                                        <div className="flex gap-x-2 text-richblack-500 text-sm">
                                            <p>{course.studentsEnrolled.length} Students</p>
                                            <p>|</p>
                                            <p>Rs {course.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
               </div>
            ):(
                <div>
                    <p>You have not created any courses yet</p>
                    <Link to="/dashboard/addCourse">
                    Create Course
                    </Link>
                </div>
            )
          }
        </div>
    )
}

export default Instructor;
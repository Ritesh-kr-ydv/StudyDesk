import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI";
import IconBtn from "../../common/IconBtn";
import CoursesTable from "./InstructorCourses/CoursesTable";
import { useState } from "react";


const MyCourses=()=>{
    const {token}=useSelector((state)=>state.auth);
    const navigate=useNavigate();
    const [courses,setCourses]=useState([]);

    useEffect(()=>{
        const fetchCourses=async()=>{
            const result=await fetchInstructorCourses(token);
            if(result){
                setCourses(result);
            }
        }
        fetchCourses();
    },[])
    return(
        <div>
            <div className="flex justify-between mb-9">
                <h1 className="text-white text-2xl">My Courses</h1>
                <IconBtn
                text="Add Course"
                onClick={()=>navigate("/dashboard/add-course")}
                //ICON
               
                />
              
            </div>
            {courses && <CoursesTable courses={courses} setCourses={setCourses}/>}

        </div>
    )
}
export default MyCourses;
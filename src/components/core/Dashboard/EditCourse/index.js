import React from "react"
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getFullDetailsOfCourse } from "../../../../services/operations/courseDetailsAPI";
import { setEditCourse } from "../../../../slices/courseSlice";
import { setCourse } from "../../../../slices/courseSlice";
import RenderSteps from "../AddCourse/RenderSteps"
import { useEffect,useState } from "react";

export default function EditCourse(){
    const dispatch=useDispatch();
    const {courseId}=useParams();
    const {course}=useSelector((state)=>state.course);
    const [loading,setLoading]=useState(false);
    const {token}=useSelector((state)=>state.auth);

    useEffect(()=>{
        const populateCourseDetails=async()=>{
            setLoading(true);
            const result=await getFullDetailsOfCourse(courseId,token);
            if(result?.courseDetails){
                dispatch(setEditCourse(true));
                dispatch(setCourse(result?.courseDetails))
            }
            setLoading(false);
        }
        populateCourseDetails()
    },[])
   return(
    <div className="text-white">
        <h1>Edit Course</h1>
        {
            course ? (<RenderSteps/>):(<p>Course Not Found</p>)
        }

    </div>
   )
}
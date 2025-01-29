import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import IconBtn from '../../common/IconBtn';
import { IoChevronBackCircle } from "react-icons/io5";

const VideoDetailsSidebar = ({setReviewModal}) => {

    const [activeStatus, setActiveStatus] = useState("");
    const [videoBarActive, setVideoBarActive] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const {sectionId, subSectionId} = useParams();
    const {
        courseSectionData,
        courseEntireData,
        totalNoOfLectures,
        completedLectures,
    } = useSelector((state)=>state.viewCourse);

    useEffect(()=> {
        const setActiveFlags = () => {
            if(!courseSectionData.length)
                return;
            const currentSectionIndex = courseSectionData.findIndex(
                (data) => data._id === sectionId
            )
            const currentSubSectionIndex = courseSectionData?.[currentSectionIndex]?.subSection.findIndex(
                (data) => data._id === subSectionId
            )
            const activeSubSectionId = courseSectionData[currentSectionIndex]?.subSection?.[currentSubSectionIndex]?._id;
            //set current section here
            setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);
            //set current sub-section here
            setVideoBarActive(activeSubSectionId);
        }
        setActiveFlags();
    },[courseSectionData, courseEntireData, location.pathname])

  return (
    <>
        <div className="bg-richblack-800 w-[250px] ">
            {/* for buttons and headings */}
            <div>
                {/* for buttons */}
                <div className="flex justify-between mt-6 ">
                    <button 
                    onClick={()=> 
                        navigate("/dashboard/enrolled-courses")

                    }
                    className="text-4xl  p-2 text-richblack-100"
                    >
                       <IoChevronBackCircle />
                    </button>

                    <div className="translate-x-[-15px] translate-y-3">
                        <IconBtn 
                            text="Add Review"
                            onClick={() => setReviewModal(true)}
                        />
                    </div>

                </div>
                {/* for heading or title */}
                <div className="mt-3">
                    <p className="font-bold text-xl text-richblack-200 mx-2">{courseEntireData?.courseName}</p>
                    <p className="mx-2 text-richblack-500 mb-2 font-bold">{completedLectures?.length} / {totalNoOfLectures}</p>
                </div>
            </div>

            {/* for sections and subSections */}
            <div>
                {
                    courseSectionData.map((course, index)=> (
                        <div
                        onClick={() => setActiveStatus(course?._id)}
                        key={index}
                        className="bg-richblack-600 text-richblack-200  font-semibold"
                        >

                            {/* section */}

                            <div>
                                <div className="font-bold mx-3 p-1 mt-2">
                                    {course?.sectionName}
                                </div>
                                {/* HW- add icon here and handle rotate 180 logic */}
                            </div>

                            {/* subSections */}
                            <div>
                                {
                                    activeStatus === course?._id && (
                                        <div>
                                            {
                                                course.subSection.map((topic, index) => (
                                                    <div
                                                    className={`flex gap-5 p-3 mt-4 ${
                                                        videoBarActive === topic._id
                                                        ? "bg-yellow-200 text-richblack-900"
                                                        : "bg-richblack-900 text-white"
                                                    }`}
                                                    key={index}
                                                    onClick={() => {
                                                        navigate(
                                                            `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
                                                        )
                                                        setVideoBarActive(topic?._id);
                                                    }}
                                                    >
                                                        <input
                                                        type='checkbox'
                                                        checked= {completedLectures.includes(topic?._id)}
                                                        onChange={() => {}}
                                                        />
                                                        <span>
                                                            {topic.title}
                                                        </span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default VideoDetailsSidebar;
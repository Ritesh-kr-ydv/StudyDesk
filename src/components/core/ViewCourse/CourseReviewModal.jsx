import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux'
import IconBtn from '../../common/IconBtn';
import { createRating } from '../../../services/operations/courseDetailsAPI';
import ReactStars from "react-rating-stars-component";
import { RxCross2 } from "react-icons/rx";


const CourseReviewModal = ({setReviewModal}) => {
    const {user} = useSelector((state)=>state.profile);
    const {token} = useSelector((state) => state.auth);
    const {courseEntireData} = useSelector((state)=> state.viewCourse);

    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm();

    useEffect(()=> {
        setValue("courseExperience", "");
        setValue("courseRating", 0);
    },[])

    const ratingChanged = (newRating) => {
        setValue("courseRating", newRating);
    }

    const onSubmit = async(data) => {
        await createRating(
            {
                courseId:courseEntireData._id,
                rating:data.courseRating,
                review:data.courseExperience,
            },
            token
        );
        setReviewModal(false);
    }

  return (
    <div>
        <div className="flex flex-col items-center justify-center">
            {/* Modal header */}
            <div className="flex justify-between gap-[170px] mb-2"  >
                <p className="text-richblack-200 font-bold text-2xl ">Add Review</p>
                <button 
                onClick={() => setReviewModal(false)}
                className="text-3xl text-richblack-400"
                >
                   <RxCross2 />
                </button>
            </div>

            {/* Modal Body */}
            <div>

                <div className="flex flex-col text-center items-center">
                    <img 
                        src={user?.image}
                        alt='user Image'
                        className='aspect-square  w-[50px] rounded-full object-cover mb-2'
                    />
                    <div>
                        <p className="text-richblack-200 text-xl font-bold">{user?.firstName} {user?.lastName}</p>
                        <p className="font-semibold">Posting Publicly</p>
                    </div>
                </div>


                <form
                onSubmit={handleSubmit(onSubmit)}
                className='mt-6 flex flex-col items-center'>

                    <ReactStars 
                        count={5}
                        onChange={ratingChanged}
                        size={40}
                        activeColor="#ffd700"
                    />

                    <div>
                        <label htmlFor='courseExperience' className="text-richblack-300 text-sm">
                            Add Your Experience*
                        </label>
                        <textarea 
                            id='courseExperience'
                            placeholder='Add Your Experience here'
                            {...register("courseExperience", {required:true})}
                            className='form-style min-h-[130px] w-full bg-richblack-800 rounded p-3'
                        />
                        {
                            errors.courseExperience && (
                                <span>
                                    Please add your experience
                                </span>
                            )
                        }
                    </div>
                    {/* Cancel and Save button */}
                    <div className="flex justify-end gap-3 mt-3 translate-x-[115px]">
                        <button
                        onClick={() => setReviewModal(false)}
                        className="bg-richblack-50 text-black rounded px-1 "
                        >
                            Cancel
                        </button>
                        <IconBtn 
                            text="save"
                          
                        />
                    </div>


                </form>

            </div>
        </div>
    </div>
  )
}

export default CourseReviewModal

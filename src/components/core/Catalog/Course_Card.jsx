import React, { useEffect, useState } from 'react'
import RatingStars from '../../common/RatingStars'
import GetAvgRating from '../../../utils/avgRating';
import { Link } from 'react-router-dom';

const Course_Card = ({course, Height}) => {


    const [avgReviewCount, setAvgReviewCount] = useState(0);

    useEffect(()=> {
        const count = GetAvgRating(course.ratingAndReviews);
        setAvgReviewCount(count);
    },[course])


    
  return (
    <div>
        <Link to={`/courses/${course._id}`}>
            <div className="flex flex-col gap-2">
                <div >
                    <img 
                        src={course?.thumbnail}
                        alt='course ka thumbnail'
                        className={`${Height}  rounded-md object-cover h-[200px] w-[350px] `}
                    />
                </div>
                <div>
                    <p className="text-richblack-50 font-bold">{course?.courseName}</p>
                    <p className="text-richblack-50">{course?.instructor?.firstName} {course?.instructor?.lastName} </p>
                    <div className='flex gap-x-3'>
                        <span>{avgReviewCount || 0}</span>
                        <RatingStars Review_Count={avgReviewCount} />
                        <span className="text-richblack-500">{course?.ratingAndReviews?.length} Ratings</span>
                    </div>
                    <p className="text-richblack-50">Rs. {course?.price}</p>
                </div>
            </div>
        </Link>

      
    </div>
  )
}

export default Course_Card

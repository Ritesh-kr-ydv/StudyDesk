import React from "react";
import { apiConnector } from "../../services/apiconnector";
import { ratingsEndpoints } from "../../services/apis";
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay,FreeMode,Navigation,Pagination}  from 'swiper'
import { useEffect,useState } from "react";
import { FaStar } from 'react-icons/fa'
import ReactStars from "react-rating-stars-component"

const ReviewSlider=()=>{
    const [reviews,setReviews]=useState([]);
    const truncateWords=15;

    useEffect(()=>{
     const fetchAllReviews=async()=>{
      const {data}=await apiConnector("GET",ratingsEndpoints.REVIEWS_DETAILS_API);
      console.log("Printing data in response",data);
      if(data?.success){
        setReviews(data?.data)
      }
      console.log("Review Array",reviews);
     }
     fetchAllReviews();
    },[]);
    return(
        <div className="mt-9 w-[1000px] translate-x-[110px]">
           <div>
            <Swiper
            slidesPerView={3}
            spaceBetween={24}
            loop={true}
            freeMode={true}
            autoplay={{
                delay:2500,
            }}
            modules={[FreeMode,Pagination,Autoplay]}
            ClassName="w-full"
            >{
              reviews.map((review,index)=>(
                <SwiperSlide key={index} className="bg-richblack-800 rounded p-5
                flex flex-col items-start">
                    <div className="flex justify-end gap-x-[30px] mb-2">

                    <img
                src={review?.user?.image
                    ?review?.user?.image:
                    `http://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName}
                    ${review?.user?.lastName}`
                }
                alt="Profile Image"
                className="h-11 w-11 object-cover rounded-full "
                />
                <div className="flex flex-col ">
                <p className="font-semibold text-richblack-50 ">{review?.user?.firstName} {review?.user?.lastName}</p>
                <p className="text-richblack-400">{review?.course?.courseName}</p>
                </div>
             
                    </div>
               
             
                <p>{review?.review}</p>
                <div className="flex gap-2">
                 <p className="text-yellow-50 my-1">{review?.rating.toFixed(1)}</p>

                <ReactStars
                count={5}
                value={review.rating}
                size={20}
                edit={false}
                activeColor="#ffd700"
                emptyIcon={<FaStar/>}
                fullIcon={<FaStar/>}
                />
                </div>
               

                </SwiperSlide>
              ))   
            }

            </Swiper>
           </div>
        </div>
    )
}
export default ReviewSlider;
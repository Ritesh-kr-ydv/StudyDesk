import React from "react";
import Footer from "../components/common/Footer";
import { apiConnector } from "../services/apiconnector";
import { categories } from "../services/apis";
import { getCatalogPageData } from "../services/operations/pageAndComponentData";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Course_Card from "../components/core/Catalog/Course_Card";
import CourseSlider from "../components/core/Catalog/CourseSlider";

const Catalog=()=>{
   
    const {catalogName}=useParams();
    const [catalogPageData,setCatalogPageData]=useState(null);
    const [categoryId,setCategoryId]=useState("");

    //featch all categories

    useEffect(()=>{
    const getCategories=async()=>{
      const res=await apiConnector("GET",categories.CATEGORIES_API);
      const category_id =
      res?.data?.data?.filter((ct)=>ct.name.split(" ").join("-").toLowerCase()===catalogName)[0]._id;
      setCategoryId(category_id)
    }
    getCategories();
    },[catalogName]);

    useEffect(()=>{
        const getCategoryDetails=async()=>{
            try{
                const res=await getCatalogPageData(categoryId);
                setCatalogPageData(res);
                console.log("***data",res)
            }
            catch(error){
                console.log(error)
            }
        }
        if(categoryId){
            getCategoryDetails();
        }
        
    },[categoryId])



  return (
    <div className="text-white   ">
        <div className="flex flex-col items-center justify-center px-[200px] py-[60px] bg-richblack-900" >
        <div className="flex flex-col gap-3 mb-4 bg-richblack-800 p-6 w-full rounded-md ">
            <p>{`Home / Catalog / `}
                <span className="text-yellow-100">{catalogPageData?.data?.selectedCategory?.name}</span>
            </p>
            <p className="text-2xl">{catalogPageData?.data?.selectedCategory?.name}</p>
            <p>{catalogPageData?.data?.selectedCategory?.description}</p>
        </div>
        <div className="mt-9">
            {/* section 1 */}
            <div className="mb-6">
                <div className="font-bold text-[27px] text-richblack-50 mb-3">Courses to get you started</div>
               <div className="flex gap-x-3 mb-2">
                <p className="text-yellow-50">Most Popular</p>
                <p>New</p>
                </div>
                <div>
                  <CourseSlider   Courses={catalogPageData?.data?.selectedCategory?.courses}/>
                </div>
               
            </div>
          
            {/* section 2 */}
            <div className="mb-7">
                <p className="font-bold text-[27px] text-richblack-50 mb-7">Top Courses in {catalogPageData?.data?.selectedCategory?.name}</p>
                <div>
                    <CourseSlider Courses={catalogPageData?.data?.differentCategory?.courses}/>
                </div>
            </div>
            {/* section 3 */}
            <div>
                <div className="font-bold text-[27px] text-richblack-50">Frequently Bougth</div>
                <div className="py-8 ">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {
                            catalogPageData?.data?.mostSellingCourses?.slice(0,4)
                            .map((course,index)=>(
                                <Course_Card course={course} key={index} Height={"h-[400px] "}/>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
      
        </div>
        <Footer/>
       
    </div>
  )
}
export default Catalog;
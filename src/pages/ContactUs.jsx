import React from "react";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import Footer from "../components/common/Footer";
import { TiMessages } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import ReviewSlider from "../components/common/ReviewSlider";

const ContactUs=()=>{
    return(
        
            <div className="text-white mt-[110px]">
                 <section>
                     <div className="flex flex-row gap-12 h-[790px] mb-7 translate-x-[130px]">
                        <div className="bg-richblack-800 rounded-2xl h-[400px] w-[500px]  flex flex-col
                        gap-7  mt-6">
                            <div className="mt-3 p-5 flex flex-col  translate-y-9 gap-11">
                            <div className="felx flex-col items-start">
                                <div className="flex flex-row gap-3">
                                   <span className="flex justify-center items-center text-xl"><TiMessages /></span>
                                <h1 className="text-[19px] font-extrabold text-richblack-5">Chat on us</h1>
                                </div>
                         
                             <p className="text-richblack-500 text-sm">Our friendly team is here to help.
                                info@studynotion.com
                             </p>
                         </div>
                         <div className="felx flex-col  items-start">
                         <div className="flex flex-row gap-3">
                                   <span className="flex justify-center items-center text-xl"><IoCall /></span>
                                <h1 className="text-[19px] font-extrabold text-richblack-5">Call us</h1>
                                </div>
                         <p className="text-richblack-500 text-sm">Cone and say hello at our office HQ.Akshay Nagar 1st block 1st cross Ramurthy Nager 
                            Bangalore-560016 </p>
                        </div>
                        <div className="felx flex-col items-start">
                        <div className="flex flex-row gap-3">
                                   <span className="flex justify-center items-center text-xl"><BiWorld /></span>
                                <h1 className="text-[19px] font-extrabold text-richblack-5">Visit us</h1>
                                </div>
                        <p className="text-richblack-500 text-sm">Mon-Fir From 8Am to 5Pm
                            +91 12345 67890 </p>
                        </div>
                            </div>
                         
                        </div>
                        <div >
                          <ContactFormSection/>
                        </div>
                    </div> 

                </section>
                <div className="mt-9 mb-9 translate-x-[125px] ">
                    <p className="text-3xl translate-x-[425px]">Reviews from Other Users</p>
                <ReviewSlider/>
                </div>
                

                {/* Footer */}
                <section>
                  <Footer/>
                </section>
             

        </div>
    );
}
export default ContactUs;
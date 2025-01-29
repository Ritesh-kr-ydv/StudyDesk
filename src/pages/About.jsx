import React from "react";
import HighlightText from "../components/core/HomePage/HighlightText";
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from "../components/core/AboutPage/Quote";
import FoundingStory from "../assets/Images/FoundingStory.png"
import StatsComponent from "../components/core/AboutPage/Stats";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";

const About=()=>{
    return(
        <div className="text-white  ">
            {/* section 1 */}
            <section >
                <div className=" bg-richblack-800 flex flex-col gap-14 justify-center items-center text-center p-[100px]">
                    <div className="">
                    <h1 className="font-bold text-4xl text-center">
                     Driving Innovation in Online Education for a 
                     <HighlightText text={"Brighter Future"} /></h1>
                     <p className="text-richblack-300">StudyNotion is at the forefront of driving innovation in online education.We 
                        are passionate about creating a brighter future by offering cutting-edge courses.
                        laveraging emerging technologies,and nuturing a vibrant learning community.
                     </p>
                    </div>
                   
                   
                    <div className="flex flex-row gap-4"
                     style={{ boxShadow: "9px 9px 100px "}}>
                        <img src={BannerImage1}/>
                        <img src={BannerImage2}/>
                        <img src={BannerImage3}/>

                    </div>
                </div>

            </section>
            {/* section 2 */}

            <section className="mt-[50px]">
                <div >
                    <Quote/>
                </div>
            </section>
            {/* section 3 */}
            <section>
                <div className="flex flex-col gap-[150px] justify-center items-center text-center m-[150px]">
                <div className="flex flex-row gap-16 ">
                    <div className="flex flex-col gap-12 text-start">
                        <h1 className="font-bold text-4xl "><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-50 to-pink-500">Our Founding Story</span></h1>
                        <p className="text-richblack-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam alias nemo facilis neque? Numquam architecto aliquam vel asperiores, minima, reiciendis earum doloremque optio quisquam fuga pariatur quod hic odit consequatur quas qui eaque modi voluptatibus obcaecati? Commodi nisi eos est atque error provident voluptatum architecto repellat porro corporis ut, aliquid veniam distinctio enim, dicta obcaecati vel at iste. Placeat, facilis!</p>
                        <p className="text-richblack-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, dolorem. Velit commodi reprehenderit non at rem, dolorum, assumenda laboriosam pariatur dolore beatae expedita facilis ad, voluptatibus explicabo harum dignissimos nemo. Impedit qui nam corrupti fugit illo nobis facere maiores aperiam in ipsam! Doloremque nisi enim magni nihil ut cumque omnis dolor, quasi obcaecati neque accusantium repellendus optio consequuntur perspiciatis sapiente!</p>
                        </div>
                    <div  className=" mt-[85px] ">
                        <img src={FoundingStory} width={2200} className=""
                        style={{ boxShadow: '10px 10px 0.5px white' }}/>
                    </div>

                </div>
                <div className="flex flex-row gap-[250px]">
                    <div className="flex flex-col gap-5 text-start">
                        <h1 className="font-bold text-4xl"><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-pink-500">Our Vision</span></h1>
                        <p className="text-richblack-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores incidunt ut explicabo quasi soluta tenetur rerum aliquid natus non tempora atque doloribus vero illum nostrum, ratione, ipsa reiciendis nulla veniam. Nam quisquam qui quas magnam dignissimos eius maxime voluptatem pariatur!</p>
                    </div>
                    <div className="flex flex-col gap-5 text-start">
                        <h1 className="font-bold text-4xl"><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-pink-500">Our Mission</span></h1>
                        <p className="text-richblack-300">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere a atque, necessitatibus, voluptates blanditiis iste totam iure aliquam numquam sequi voluptatibus ipsam est officiis amet quos mollitia enim asperiores repellat debitis, cum fugiat rerum. Molestiae provident mollitia quasi nu
                        </p>
                    </div>

                </div>
                </div>
               
            </section>
            {/* section 4 */}

             <StatsComponent/>
            {/* section 5 */}
           <section className="mx-auto flex flex-col items-center justify-between gap-5">
           <LearningGrid/>
           <ContactFormSection/>
           </section>
           <section>
            <div className="text-center mt-6 mb-8">
                <p className="text-3xl">Reviews From Others Learners</p>
                <div className="translate-x-[140px]">
                <ReviewSlider />
                </div>
           
            </div>
           </section>

           <Footer/>
        </div>
    );

}
export default About;
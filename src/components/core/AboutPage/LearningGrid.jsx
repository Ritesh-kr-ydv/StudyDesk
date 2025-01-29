import React from "react";
import CTAButton from "../../core/HomePage/Button"
import HighlightText from "../HomePage/HighlightText";

const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Learning for",
      highlightText: "Anyone, Anywhere",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
      BtnText: "Learn More",
      BtnLink: "/",
    },
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 3,
      heading: "Certification",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 4,
      heading: `Rating "Auto-grading"`,
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
  ];


const LearningGrid=()=>{
   return(
    <div className="grid mx-auto grid-col-1 lg:grid-cols-4 mb-10 mt-13 p-[170px] mr-7">
        {
           LearningGridArray.map((card,index)=>{
            return(
                <div key={index} 
                className={`${index===0 && "lg:col-span-2 lg:h-[250px]"}
                ${
                    card.order%2===1 ? "bg-richblack-700 lg:h-[250px]":"bg-richblack-800 lg:h-[250px]"
                }
                ${card.order===3 && "lg:col-start-2 lg:h-[250px]"}
                ${card.order<0 && "bg-transparent"}`}>
                    {
                        card.order<0
                        ? (
                            <div className=" flex flex-col justify-center items-start px-4 py-4 translate-y-[-20px]">
                                <div className="font-bold mb-5 text-3xl  text-start">
                                   {card.heading}
                                   <HighlightText text={card.highlightText}/>
                                </div>
                                <p className="text-richblack-300 text-start text-md mb-2">{card.description}</p>
                                <div>
                                    <CTAButton active={true} linkto={card.BtnLink}>
                                        {card.BtnText}
                                    </CTAButton>
                                </div>
                            </div>
                        ):
                        (
                            <div className="flex flex-col  gap-6 justify-center items-center p-9 text-center">
                                <h1 className="font-bold text-center text-[19px]">{card.heading}</h1>
                                <p className="text-richblack-300">{card.description}</p>
                            </div>
                        )
                    }

                </div>
            )
           }) 
        }

    </div>
   );
}
export default LearningGrid;
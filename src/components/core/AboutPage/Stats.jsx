import React from "react"

const Stats=[
    {count:"5K+",label:"Active Students"},
    {count:"10K+",label:"Mentors"},
    {count:"200+",label:"Courses"},
    {count:"50+",label:"Awards"},
       
];

const StatsComponent=()=>{
    return(
      <section>
        <div className="flex justify-center items-center text-center bg-richblack-700 p-8  ">
            <div className="flex flex-row gap-x-[160px]">
                {
                    Stats.map((data,index)=>{
                        return(
                            <div key={index}>
                                 <h1 className="text-3xl font-bold">{data.count}</h1>
                                 <h4 className="text-sm text-richblack-300">{data.label}</h4>
                            </div>
                       
                        );
                    })
                }
            </div>
        </div>
      </section>
    );
}
export default StatsComponent;
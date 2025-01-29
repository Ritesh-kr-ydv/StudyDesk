import React, { useState } from 'react'

import {Chart, registerables} from "chart.js"
import {Pie} from "react-chartjs-2"

Chart.register(...registerables);

const InstructorChart = ({courses}) => {

    const [currChart, setCurrChart] = useState("students");

    //functio to genertae random colors
    const getRandomColors = (numColors) => {
        const colors = [];
        for(let i=0; i<numColors; i++) {
            const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random()*256)},
            ${Math.floor(Math.random()*256)})`
            colors.push(color);
        }
        return colors;
    }

    //create data for chart displaying student info

    const chartDataForStudents = {
        labels: courses.map((course)=> course.courseName),
        datasets: [
            {
                data: courses.map((course)=> course.totalStudentsEnrolled),
                backgroundColor: getRandomColors(courses.length),
            }
        ]
    }


    //create data for chart displaying iincome info
    const chartDataForIncome = {
        labels:courses.map((course)=> course.courseName),
        datasets: [
            {
                data: courses.map((course)=> course.totalAmountGenerated),
                backgroundColor: getRandomColors(courses.length),
            }
        ]
    }


    //create options
    const options = {

    };


  return (
    <div  className="w-[700px] bg-richblack-800 p-7 rounded">
      <p className="font-bold text-richblack-50 text-2xl mb-3">Visualise</p>
      <div className='flex gap-x-5'>
        <button
        onClick={() => setCurrChart("students")}
        className={`${currChart==="students"?"text-yellow-50 font-semibold bg-richblack-700 p-1 rounded ":"text-richblack-50 font-semibold "}`}
        >
            Student
        </button>

        <button
        onClick={() => setCurrChart("income")}
        className={`${currChart==="income"?"text-yellow-50 font-semibold bg-richblack-700 p-1 rounded ":"text-richblack-50 font-semibold "}`}
        >
            Income
        </button>
      </div>
      <div className="translate-x-[110px] h-[400px]">
        <Pie 
            data={currChart === "students" ? chartDataForStudents : chartDataForIncome}
            options={options}
        />
      </div>
    </div>
  )
}

export default InstructorChart

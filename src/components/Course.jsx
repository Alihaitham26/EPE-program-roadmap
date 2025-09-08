import { useState } from "react"
import Modal from "./modal"

export default function Course({clickhandler,courseData}){
    return (
        <article className="course glass-look">
            <h3 onClick={()=>clickhandler(courseData)}>{courseData.courseCode}</h3>
            <h4>{courseData.courseName}</h4>
            <p>{courseData.creditHours+"CH"}</p>
        </article>
    )
}
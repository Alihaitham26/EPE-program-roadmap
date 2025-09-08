import Course from "./Course"
import "./semster.css"

export default function Semester({semesterObj,semesterNumber}){
    return (
        <section className="semester">
            <h2>semester {semesterNumber}</h2>
            <div className="courses">
                {semesterObj.map((course)=><Course courseCode={course.courseCode} courseName={course.courseName} CourseCH={course.creditHours} key={course.courseCode}/>)}
            </div>            
        </section>
    )
}
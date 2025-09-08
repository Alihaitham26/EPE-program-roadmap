import Course from "./Course"
import "./semster.css"

export default function Semester({semesterObj,semesterNumber,clickhandler}){
    return (
        <section className="semester">
            <h2>semester {semesterNumber}</h2>
            <div className="courses">
                {semesterObj.map((courseData,i)=><Course clickhandler={clickhandler} courseData={courseData} key={courseData.courseCode+i}/>)}
            </div>            
        </section>
    )
}
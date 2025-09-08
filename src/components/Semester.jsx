import Course from "./Course"
import "./semster.css"

export default function Semester(){
    return (
        <section className="semester">
            <h2>semester 1</h2>
            <div className="courses">
                <Course courseCode={"PHYG001"} courseName={"mechanical properties of matter and thermodynamics"} CourseCH={3}/>
            </div>            
        </section>
    )
}
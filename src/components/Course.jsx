export default function Course({courseCode,courseName,CourseCH}){
    return (
        <article className="course glass-look">
            <h3>{courseCode}</h3>
            <h4>{courseName}</h4>
            <p>{CourseCH+"CH"}</p>
        </article>
    )
}
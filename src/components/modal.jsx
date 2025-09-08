import { createPortal } from "react-dom";

export default function Modal({onClose,courseData}){
    return createPortal(
        <div className="modal" >
            <button className="close" onClick={onClose}>X</button>
            <div className="info">
                <h5 className="label">course code:</h5>
                <p className="value">{courseData.courseCode}</p>
            </div>
            <div className="info">
                <h5 className="label">course name:</h5>
                <p className="value">{courseData.courseName}</p>
            </div>
            <div className="info">
                <h5 className="label">credit hours:</h5>
                <p className="value">{courseData.creditHours}</p>
            </div>
            <div className="info">
                <h5 className="label">prerequisites:</h5>
                <div className="values">
                     {!courseData.prerequisites[0] ? <p className="value">None</p> : courseData.prerequisites.map((prerequisite)=><p className="value" key={prerequisite}>{prerequisite}</p>)}
                </div>

            </div>
            <div className="info">
                <h5 className="label"></h5>
                <p className="value"></p>
            </div>
        </div>
    ,document.body)
}
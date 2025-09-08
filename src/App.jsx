import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Semester from "./components/Semester"
import courseRoadmap from "./data"
import Modal from "./components/modal"

function App() {
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [courseData,setCourseData] = useState({})
  function handleCourseClick(courseData){
    setCourseData(courseData)
    setIsModalOpen(true)
  }
  let closeModal = ()=>setIsModalOpen(false)
  return (
    <>
      <Header />
      <main>
        {courseRoadmap.map((semester,index)=><Semester semesterObj={semester} semesterNumber={index + 1} key={index} clickhandler={handleCourseClick}/>)}
        <Footer />
      </main>
      {isModalOpen && <Modal onClose={closeModal} courseData={courseData}/>}
    </>
  )
}

export default App

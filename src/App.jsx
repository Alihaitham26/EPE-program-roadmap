import Footer from "./components/Footer"
import Header from "./components/Header"
import Semester from "./components/Semester"
import courseRoadmap from "./data"

function App() {

  return (
    <>
      <Header />
      {courseRoadmap.map((semester,index)=><Semester semesterObj={semester} semesterNumber={index + 1} key={index}/>)}
      <Footer />
    </>
  )
}

export default App

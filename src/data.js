const courseRoadmap = [
  // Semester 1
  [
    {
      courseCode: "GENG001",
      courseName: "Critical & Creative Thinking",
      creditHours: 2,
      prerequisites: [],
    },
    {
      courseCode: "MTHG001",
      courseName: "Calculus 1",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "PHYG001",
      courseName: "Mechanical Properties of Matter and Thermodynamics",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EMCG001",
      courseName: "Engineering Mechanics- Statics",
      creditHours: 2,
      prerequisites: [],
    },
    {
      courseCode: "INTG005",
      courseName: "Introduction to Computer Science",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "MTHG001",
      courseName: "Algebra",
      creditHours: 2,
      prerequisites: [],
    },
    {
      courseCode: "INTG001",
      courseName: "Technical Drawing",
      creditHours: 2,
      prerequisites: [],
    },
  ],
  // Semester 2
  [
    {
      courseCode: "GENG002",
      courseName: "Societal Issues",
      creditHours: 2,
      prerequisites: [],
    },
    {
      courseCode: "MTHG003",
      courseName: "Calculus 2",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "PHYG002",
      courseName: "Electricity and Magnetism",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EMG002",
      courseName: "Engineering Mechanics- Dynamics",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "ENGG001",
      courseName: "Applied and Modern Manufacturing Engineering",
      creditHours: 2,
      prerequisites: [],
    },
    {
      courseCode: "CHEG001",
      courseName: "Chemistry for Engineers",
      creditHours: 2,
      prerequisites: [],
    },
  ],
  // Semester 3
  [
    {
      courseCode: "EMGC102",
      courseName: "Dynamics of Rigid bodies",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "MTHG104",
      courseName: "Differential Equations",
      creditHours: 2,
      prerequisites: [],
    },
    {
      courseCode: "EPEG118",
      courseName: "Electronics",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG101",
      courseName: "Electrical Circuits (1)",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG102",
      courseName: "Principles of Energy Conversion",
      creditHours: 2,
      prerequisites: [],
    },
    {
      courseCode: "EPEG103",
      courseName: "Computer Applications in Electrical Power Systems",
      creditHours: 3,
      prerequisites: [],
    },
  ],
  // Semester 4
  [
    {
      courseCode: "GENG011",
      courseName: "Selected Topics 2",
      creditHours: 2,
      prerequisites: [],
    },
    {
      courseCode: "MTHG102",
      courseName: "Linear Algebra and Multivariable Integrals",
      creditHours: 2,
      prerequisites: [],
    },
    {
      courseCode: "EPEG106",
      courseName: "Logic Circuits and Microprocessors",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG105",
      courseName: "Electrical Circuits (2)",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG104",
      courseName: "Electromagnetic Fields",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "INTG118",
      courseName: "Electric Materials",
      creditHours: 2,
      prerequisites: [],
    },
  ],
  // Semester 5
  [
    {
      courseCode: "CVEG118",
      courseName: "Civil Engineering",
      creditHours: 2,
      prerequisites: [],
    },
    {
      courseCode: "MTHG110",
      courseName: "Introduction to Numerical Analysis",
      creditHours: 2,
      prerequisites: [],
    },
    {
      courseCode: "EPEG204",
      courseName: "Signals and Systems",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "PHEG101",
      courseName: "Engineering Thermodynamics",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "MPEG202",
      courseName: "Fundamentals of Mechanical Design",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG202",
      courseName: "Electrical Machines (1)",
      creditHours: 3,
      prerequisites: [],
    },
  ],
  // Semester 6
  [
    {
      courseCode: "EPEG201",
      courseName: "Power Systems (1)",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "CMPG218",
      courseName: "Data Structure",
      creditHours: 1,
      prerequisites: [],
    },
    {
      courseCode: "EPEG205",
      courseName: "Electric and Electronic Measurements",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG207",
      courseName: "Automatic Control Systems",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG206",
      courseName: "Electrical Machines (2)",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "MTHG113",
      courseName: "Probability and Statistics",
      creditHours: 2,
      prerequisites: [],
    }
  ],
  // Semester 7
  [
    {
      courseCode: "EPEG301",
      courseName: "Power Systems (2)",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG304",
      courseName: "Switchgear and Protection Systems",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG206",
      courseName: "Electrical Power Generation",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG302",
      courseName: "Power Electronics (1)",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG303",
      courseName: "Electrical Machines (3)",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "GENG351",
      courseName: "Selected Current Local Issues",
      creditHours: 1,
      prerequisites: [],
    },
  ],
  // Semester 8
  [
    {
      courseCode: "GENG2XX",
      courseName: "(UR) Restricted Elective-2",
      creditHours: 2,
      prerequisites: [],
    },
    {
      courseCode: "EECG318",
      courseName: "Electrical Communications Systems",
      creditHours: 2,
      prerequisites: [],
    },
    {
      courseCode: "EPEG305",
      courseName: "High Voltage Engineering",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG306",
      courseName: "Power Electronics (2)",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "GENG1XX",
      courseName: "(UR) Restricted Elective-1",
      creditHours: 2,
      prerequisites: [],
    },
    {
      courseCode: "EPEG307",
      courseName: "Digital Control Systems",
      creditHours: 3,
      prerequisites: [],
    },
  ],
  // Semester 9
  [
    {
      courseCode: "GENG21X/23X",
      courseName: "(UR) Free Elective",
      creditHours: 2,
      prerequisites: [],
    },
    {
      courseCode: "EPEG401",
      courseName: "Electrical Energy Utilization and Management",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG4XX",
      courseName: "Elective Course (1)",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG4XX",
      courseName: "Elective Course (2)",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG4XX",
      courseName: "Elective Course (3)",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG481",
      courseName: "Graduation Project (1)",
      creditHours: 1,
      prerequisites: [],
    },
  ],
  // Semester 10
  [
    {
      courseCode: "EPEG402",
      courseName: "Electrical Installations",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG4XX",
      courseName: "Elective Course (4)",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG4XX",
      courseName: "Elective Course (5)",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG4XX",
      courseName: "Elective Course (6)",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG482",
      courseName: "Graduation Project (2)",
      creditHours: 3,
      prerequisites: [],
    },
  ],
];

export default courseRoadmap

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
      courseCode: "MTHG002",
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
      prerequisites: ["Calclus 1(MTHG002)"],
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
      creditHours: 3,
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
      courseCode: "EMGC101",
      courseName: "Dynamics of Rigid bodies",
      creditHours: 3,
      prerequisites: ["Engineering Mechanics-Statics(EMCG001)"],
    },
    {
      courseCode: "MTHG104",
      courseName: "Differential Equations",
      creditHours: 3,
      prerequisites: ["Calculus 2(MTHG003)"],
    },
    ,
    {
      courseCode: "INTG118",
      courseName: "Electric Materials",
      creditHours: 2,
      prerequisites: ["Electricity and Magnetism(PHYG002)"],
    },
    {
      courseCode: "EPEG101",
      courseName: "Electrical Circuits (1)",
      creditHours: 3,
      prerequisites: ["Electricity and Magnetism(PHYG002)"],
    },
    {
      courseCode: "EPEG102",
      courseName: "Principles of Energy Conversion",
      creditHours: 2,
      prerequisites: ["Electricity and Magnetism(PHYG002)"],
    },
    {
      courseCode: "EPEG103",
      courseName: "Computer Applications in Electrical Power Systems",
      creditHours: 3,
      prerequisites: ["Introduction to Computer Science(INTG005)"],
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
      creditHours: 3,
      prerequisites: ["Differential Equations(MTHG104)"],
    },
    {
      courseCode: "EPEG106",
      courseName: "Logic Circuits and Microprocessors",
      creditHours: 3,
      prerequisites: ["Electronics(EPEG118)"],
    },
    {
      courseCode: "EPEG105",
      courseName: "Electrical Circuits (2)",
      creditHours: 3,
      prerequisites: ["Electrical Circuits (1)(EPEG101)"],
    },
    {
      courseCode: "EPEG104",
      courseName: "Electromagnetic Fields",
      creditHours: 4,
      prerequisites: ["Electricity and Magnetism(PHYG002)"],
    },
    {
      courseCode: "EPEG118",
      courseName: "Electronics",
      creditHours: 3,
      prerequisites: ["Electricity and Magnetism(PHYG002)"],
    }
  ],
  // Semester 5
  [
    {
      courseCode: "CVEG118",
      courseName: "Civil Engineering",
      creditHours: 2,
      prerequisites: ["(AMTG001)"],
    },
    {
      courseCode: "MTHG110",
      courseName: "Introduction to Numerical Analysis",
      creditHours: 2,
      prerequisites: ["linear Algebra and Multivariable Integrals(MTHG102)"],
    },
    {
      courseCode: "EPEG204",
      courseName: "Signals and Systems",
      creditHours: 3,
      prerequisites: ["Differential Equations(MTHG104)","electronics(EPEG118)"],
    },
    {
      courseCode: "MEPG173",
      courseName: "Engineering Thermodynamics",
      creditHours: 3,
      prerequisites: ["mechanical Properties of Matter and Thermodynamics(PHYG001)"],
    },
    {
      courseCode: "MDPG102",
      courseName: "Fundamentals of Mechanical Design",
      creditHours: 2,
      prerequisites: ["technical Drawing(INTG001)"],
    },
    {
      courseCode: "EPEG202",
      courseName: "Electrical Machines (1)",
      creditHours: 3,
      prerequisites: ["Electrical Circuits (2)(EPEG105)"],
    },
  ],
  // Semester 6
  [
    {
      courseCode: "EPEG201",
      courseName: "Power Systems (1)",
      creditHours: 3,
      prerequisites: ["Electrical Circuits (2)(EPEG105)"],
    },
    {
      courseCode: "CMPG218",
      courseName: "Data Structure",
      creditHours: 2,
      prerequisites: ["electromagnetic Fields(EPEG104)"],
    },
    {
      courseCode: "EPEG203",
      courseName: "Electric and Electronic Measurements",
      creditHours: 3,
      prerequisites: ["electronics(EPEG118)","Electrical Circuits (1)(EPEG101)"],
    },
    {
      courseCode: "EPEG207",
      courseName: "Automatic Control Systems",
      creditHours: 3,
      prerequisites: [],
    },
    {
      courseCode: "EPEG205",
      courseName: "Electrical Machines (2)",
      creditHours: 3,
      prerequisites: ["Electrical Machines (1)(EPEG202)"],
    },
    {
      courseCode: "MTHG113",
      courseName: "Probability and Statistics",
      creditHours: 2,
      prerequisites: ["calculus 2(MTHG003)"],
    }
  ],
  // Semester 7
  [
    {
      courseCode: "EPEG301",
      courseName: "Power Systems (2)",
      creditHours: 3,
      prerequisites: ["Power Systems (1)(EPEG201)"],
    },
    {
      courseCode: "EPEG304",
      courseName: "Switchgear and Protection Systems",
      creditHours: 3,
      prerequisites: [  "electric and electronic Measurements(EPEG203)"],
    },
    {
      courseCode: "EPEG206",
      courseName: "Electrical Power Generation",
      creditHours: 3,
      prerequisites: ["electrical circuits (1)(EPEG101)","Engineering Thermodynamics(MEPG173)"],
    },
    {
      courseCode: "EPEG302",
      courseName: "Power Electronics (1)",
      creditHours: 3,
      prerequisites: ["Electronics(EPEG118)","Electrical Circuits (2)(EPEG105)"],
    },
    {
      courseCode: "EPEG303",
      courseName: "Electrical Machines (3)",
      creditHours: 3,
      prerequisites: ["Electrical Machines (2)(EPEG205)"],
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
      prerequisites: ["Signals and Systems(EPEG204)","power Systems (1)(EPEG201)"],
    },
    {
      courseCode: "EPEG305",
      courseName: "High Voltage Engineering",
      creditHours: 3,
      prerequisites: ["switchgear and Protection Systems(EPEG304)"],
    },
    {
      courseCode: "EPEG306",
      courseName: "Power Electronics (2)",
      creditHours: 3,
      prerequisites: ["Power Electronics (1)(EPEG302)"],
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
      prerequisites: ["Automatic Control Systems(EPEG207)"],
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
      prerequisites: ["Power Electronics (2)(EPEG306)","Electrical Machines (3)(EPEG303)"],
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
      prerequisites: ["switchgear and Protection Systems(EPEG304)"],
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
      prerequisites: ["Graduation Project (1)(EPEG481)"],
    },
  ],
];

export default courseRoadmap

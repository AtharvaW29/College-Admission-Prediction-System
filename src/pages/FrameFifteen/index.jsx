import React from "react";
import { Text } from "components";
import { useNavigate } from "react-router-dom";

const programVal=['Bio Technology (4 Years, Bachelor of Technology)',
'Chemical Engineering (4 Years, Bachelor of Technology)',
'Civil Engineering (4 Years, Bachelor of Technology)',
'Computer Science and Engineering (4 Years, Bachelor of Technology)',
'Electrical Engineering (4 Years, Bachelor of Technology)',
'Electronics and Communication Engineering (4 Years, Bachelor of Technology)',
'Industrial and Production Engineering (4 Years, Bachelor of Technology)',
'Information Technology (4 Years, Bachelor of Technology)',
'Instrumentation and Control Engineering (4 Years, Bachelor of Technology)',
'Mechanical Engineering (4 Years, Bachelor of Technology)',
'Textile Technology (4 Years, Bachelor of Technology)',
'Architecture (5 Years, Bachelor of Architecture)',
'Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)',
'Materials Science and Metallurgical Engineering (4 Years, Bachelor of Technology)',
'Mathematics and Data Science (5 Years, Bachelor and Master of Technology (Dual Degree))',
'Planning (4 Years, Bachelor of Planning)',
'Production and Industrial Engineering (4 Years, Bachelor of Technology)',
'Biotechnology and Biochemical Engineering (4 Years, Bachelor of Technology)',
'Chemistry (5 Years, Bachelor of Science and Master of Science (Dual Degree))',
'Computational Mathematics (5 Years, Bachelor and Master of Technology (Dual Degree))',
'Electronics and Instrumentation Engineering (4 Years, Bachelor of Technology)',
'Engineering Physics (5 Years, Bachelor and Master of Technology (Dual Degree))',
'Mathematics & Computing (5 Years, Bachelor of Science and Master of Science (Dual Degree))',
'Physics (5 Years, Bachelor of Science and Master of Science (Dual Degree))',
'Production Engineering (4 Years, Bachelor of Technology)',
'Electrical and Electronics Engineering (4 Years, Bachelor of Technology)',
'Engineering Physics (4 Years, Bachelor of Technology)',
'Materials Science and Engineering (4 Years, Bachelor of Technology)',
'Biotechnology (5 Years, Bachelor and Master of Technology (Dual Degree))',
'Chemical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))',
'Chemistry (5 Years, Integrated Master of Science)',
'Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))',
'Electronics and Communication Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))',
'Mathematics and Computing (4 Years, Bachelor of Technology)',
'Artificial Intelligence (4 Years, Bachelor of Technology)',
'Computational and Data Science (4 Years, Bachelor of Technology)',
'Mining Engineering (4 Years, Bachelor of Technology)',
'Civil Engineering with Specialization in Construction Technology and Management (5 Years, Bachelor and Master of Technology (Dual Degree))',
'Computer Science and Engineering with Specialization in Cyber Security (5 Years, Bachelor and Master of Technology (Dual Degree))',
'Computer Science and Engineering with Specialization in Data Science (5 Years, Bachelor and Master of Technology (Dual Degree))',
'Electrical Engineering with Specialization In Power System Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))',
'Electronics and Communication Engineering with Specialization in Microelectronics and VLSI System Design (5 Years, Bachelor and Master of Technology (Dual Degree))',
'Material Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))',
'Mathematics and Computing Technology (5 Years, Bachelor and Master of Technology (Dual Degree))',
'Mechanical Engineering with Specialization in Manufacturing and Industrial Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))',
'Bio Medical Engineering (4 Years, Bachelor of Technology)',
'Engineering and Computational Mechanics (4 Years, Bachelor of Technology)',
'Computer Engineering (4 Years, Bachelor of Technology)',
'Ceramic Engineering (4 Years, Bachelor of Technology)',
'Ceramic Engineering and M.Tech Industrial Ceramic (5 Years, Bachelor and Master of Technology (Dual Degree))',
'Food Process Engineering (4 Years, Bachelor of Technology)',
'Industrial Design (4 Years, Bachelor of Technology)',
'Life Science (5 Years, Integrated Master of Science)',
'Mathematics (5 Years, Integrated Master of Science)',
'Metallurgical and Materials Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))',
'Mining Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))',
'Physics (5 Years, Integrated Master of Science)',
'Aerospace Engineering (4 Years, Bachelor of Technology)',
'Electronics and Telecommunication Engineering (4 Years, Bachelor of Technology)',
'Metallurgy and Materials Engineering (4 Years, Bachelor of Technology)',
'Integrated B. Tech.(IT) and M. Tech (IT) (5 Years, Integrated B. Tech. and M. Tech.)',
'Integrated B. Tech.(IT) and MBA (5 Years, Integrated B. Tech. and MBA)',
'Electronics and Communication Engineering (Under Flexible Academic Program) (4 Years, Bachelor of Technology)',
'Information Technology (Under Flexible Academic Program) (4 Years, Bachelor of Technology)',
'Information Technology-Business Informatics (4 Years, Bachelor of Technology)',
'Computer Science and Engineering with Major in Artificial Intelligence (4 Years, Bachelor of Technology)',
'Smart Manufacturing (4 Years, Bachelor of Technology)',
'Computer Science and Engineering with specialization in Artificial Intelligence and Data Science (4 Years, Bachelor of Technology)',
'Electronics and Communication Engineering with specialization in VLSI and Embedded Systems (4 Years, Bachelor of Technology)',
'Computer Science (4 Years, Bachelor of Technology)',
'Computer Science and Artificial Intelligence (4 Years, Bachelor of Technology)',
'Computer Science and Business (4 Years, Bachelor of Technology)',
'Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)',
'Artificial Intelligence and Data Science (4 Years, Bachelor of Technology)',
'Electronics and Communication Engineering with specialization in Design and Manufacturing (4 Years, Bachelor of Technology)',
'Mechanical Engineering with specialization in Design and Manufacturing (4 Years, Bachelor of Technology)',
'Computer Science and Engineering with specialization in Cyber Security (4 Years, Bachelor of Technology)',
'Computer Science and Engineering (with Specialization of Data Science and Artificial Intelligence) (4 Years, B. Tech / B. Tech (Hons.))',
'Electronics and Communication Engineering (with Specialization of Embedded Systems and Internet of Things) (4 Years, B. Tech / B. Tech (Hons.))',
'Computer Science Engineering (Artificial lntelligence and Machine Learning) (4 Years, Bachelor of Technology)',
'Computer Science Engineering (Data Science and Analytics) (4 Years, Bachelor of Technology)',
'Computer Science Engineering (Human Computer lnteraction and Gaming Technology) (4 Years, Bachelor of Technology)',
'Electronics and Communication Engineering (Internet of Things) (4 Years, Bachelor of Technology)',
'Mechatronics Engineering (4 Years, Bachelor of Technology)',
'Agricultural Engineering (4 Years, Bachelor of Technology)',
'Artificial Intelligence and Machine Learning (4 Years, Bachelor of Technology)',
'Food Technology (5 Years, Integrated Master of Science)',
'Mathematics and Computing (5 Years, Integrated Master of Science)',
'Quantitative Economics & Data Science (5 Years, Integrated Master of Science)',
'Carpet and Textile Technology (4 Years, Bachelor of Technology)',
'Electronics System Engineering (4 Years, Bachelor of Technology)',
'Food Technology (4 Years, Bachelor of Technology)',
'Food Engineering and Technology (4 Years, Bachelor of Technology)',
'Computer Science Engineering (Data Science) (4 Years, B. Tech / B. Tech (Hons.))',
'Computer Science & Engineering (5 Years, B.Tech. + M.Tech./MS (Dual Degree))',
'Electronics & Communication Engineering (5 Years, B.Tech. + M.Tech./MS (Dual Degree))',
'Instrumentation Engineering (4 Years, Bachelor of Technology)',
'Food Technology and Management (4 Years, Bachelor of Technology)',
'Handloom and Textile Technology (4 Years, Bachelor of Technology)',
'Computer Science Engineering (Artificial Intelligence) (4 Years, B. Tech / B. Tech (Hons.))',
'Chemical Engineering (5 Years, Integrated Masters in Technology)',
'Biomedical Engineering (4 Years, Bachelor of Technology)',
'Energy Engineering (4 Years, Bachelor of Technology)',
'Electronics and Communication Engineering (Avionics) (4 Years, Bachelor of Technology)',
'Electrical and Instrumentation Engineering (4 Years, Bachelor of Technology)',
'Computer Science (5 Years, Integrated Master of Technology)',
'Architecture, Town and Regional Planning (5 Years, Bachelor of Architecture)',
'Integrated B. Tech.(IT) and M. Tech (IT) (5 Years, Integrated B. Tech. and M. Tech. /MBA)',
'Integrated B. Tech.(IT) and MBA (5 Years, Integrated B. Tech. and M. Tech. /MBA)',
'Chemical Engineering (Plastic and Polymer) (4 Years, Bachelor of Technology)',
'Mathematics and Computing (5 Years, Integrated Master of Technology)',
'B. Tech. Electronics and Communication Engineering and M. Tech. Electronics and Communication Engineering with specialization in Communication Systems Design (5 Years, Bachelor and Master of Technology (Dual Degree))',
'B. Tech. Electronics and Communication Engineering and M. Tech. Electronics and Communication Engineering with specialization in VLSI Design (5 Years, Bachelor and Master of Technology (Dual Degree))',
'B. Tech. Mechanical Engineering and M. Tech. in Mechanical Engineering with specialization in Product Design (5 Years, Bachelor and Master of Technology (Dual Degree))',
'B. Tech. Mechanical Engineering and M. Tech. Mechanical Engineering with specialization in Advanced Manufacturing (5 Years, Bachelor and Master of Technology (Dual Degree))',
'Manufacturing Engineering (4 Years, Bachelor of Technology)']
const FrameFifteen = ({data, onChange}) => {

  const navigate = useNavigate();

  const handleProgramSelect = (event) => {
    const newData = {...data, 'Academic Program Name': event.target.value}
    console.log(newData)
    onChange(newData)
    navigate('/frameseven')
  };

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[62px] items-center justify-start mx-auto p-[343px] md:px-10 sm:px-5 w-full">
        <Text className="font-medium text-gray_900 text-left w-auto" as="h2" variant="h2">
          Select Program
        </Text>
        <select
          className="bg-bluegray_500 flex flex-row items-center justify-center mb-[129px] p-[25px] md:px-5 rounded-[50px] shadow-bs1 w-[35%] md:w-full"
          value={data}
          onChange={handleProgramSelect}
          style={{fontSize:"125%", color: "white" }}
        >
          <option  style={{fontSize:"125%",color: "white" }} value="">Select Program</option>
          {programVal.map((val, index)=>{
             return <option style={{fontSize:"125%",color: "white" }}key={index} value={val}>{val}</option>
          })}
        </select>
      </div>
    </>
  );
};

export default FrameFifteen;
import React from 'react';

const Education = () => {
    return ( 
        <div className="Education">
            <h2>Education</h2>
            <hr align="left"/>

            <h3 className="EducationSchoolName">Iowa State University</h3>
            <h4 className="EducationDate"><i>August 2017 - Present</i></h4>
    
            <div className="EducationInformation"> 
                <h4 className="EducationMajor">Bachelors of Science in Software Engineering</h4>
                <h4 className="EducationGPA"><i>GPA: 3.27</i></h4>
                <h4 className="EducationMinor">Minor in Cyber Security</h4>
            </div>
            

            <p className="EducationCoursework"><b>Relevant Coursework:</b> Computer Science 352 - Operating Systems, Computer Science 311 - Algorithms, Computer Science 363 - 
            Databases, Software Engineering 329 - Project Management,  Computer Science 228 - Data Structures, Computer Science 327 - Advanced Programming Concepts,
            Computer Science 227 - Object Oriented Programming</p>

        </div>
     );
}
 
export default Education;
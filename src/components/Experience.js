import React from 'react'

const Experience = () => {
    return ( 
        <div className="Experience">
            <h2>Experience</h2>
            <hr align="left"/>

            <div className="HyveeExperience">
                <h3>Hy-Vee Inc.</h3>
                <h4>May 2019 - August 2019</h4>
                <h4>Software Engineering Intern</h4>

                <ul>
                    <li>Developer for the Hy-Vee Pharmacy team</li>
                    <li>Contributed extensively to the development and launch of pharmacy family accounts, a web application which allows users to manage prescriptions for 
                        their authorized family members
                    </li>
                    <li>Utilized React and Redux to build interactive front-end pages for pharmacy family accounts</li>
                    <li>Developed and maintained RESTful APIs using .NET core with C#</li>
                    <li>Followed Agile and TDD methodologies</li>
                </ul>
            </div>

            <div className="TaExperience">
                <h3>Iowa State Department of Computer Science</h3>
                <h4>August 2019 - May 2020</h4>
                <h4>Computer Science 227 Teaching Assistant</h4>

                <ul>
                    <li>Used my knowledge of Java and object-oriented programming to explain questions and assist students with understanding course material</li>
                    <li>Held weekly office hours for students to receive additional help to ensure their success in the course</li>
                    <li>Lead a weekly lab section of 30 students to help students solidify programming concepts and skills</li>
                </ul>
            </div>

            <div className="CheckerStockerExperience">
                <h3>Hy-Vee Inc.</h3>
                <h4>July 2015 - August 2018</h4>
                <h4>Checker Stocker</h4>

                <ul>
                    <li>Collaborated with team members to provide high-quality customer service</li>
                    <li>Applied communication skills to provide a simple and enjoyable shopping experience</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Experience;
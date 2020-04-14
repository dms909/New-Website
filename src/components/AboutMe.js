import React from 'react';

const AboutMe = () => {
    return ( 
        <div className="AboutMe">
            <h2>About Me</h2>
            <hr align="left"/>

            <div className="AboutText">
                <div className="ExperienceAbout">
                    <p>Welcome to my website! Let me tell you a bit about myself. I am an Iowa native with a passion for learning and technology. 
                        Currently, I am a junior at Iowa State University as a software engineering major. This upcoming summer, I'll be a software engineer 
                        intern for the individual disability team at Principal Financial Group. Previously, I was an intern at Hy-Vee's technology center, HST.
                        Over the past year, I've also been working as a Computer Science 227 Teaching Assistant. From my experience within the software field,
                        I've learned  
                    </p>
                </div>

                <div className="FunAbout">
                    <p> On top of software development, I am very passioniate about music.</p>
                </div>
            </div>
        </div>
     );
}
 
export default AboutMe;
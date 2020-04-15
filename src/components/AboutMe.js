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
                        I've learned a lot about the discipline, and what creates good software. As I move forward in my career, I hope to continue to learn and
                        create products that I love.
                    </p>
                </div>

                <div className="FunAbout">
                    <p> Although most of my experience comes from professional enviroments, I enjoy learning new technologies on my own time. Currently, I am working
                        on an application to assist employees who work from home. Some of my favorite technologies I've been learning lately have been React, Python,
                        C#, and SpringBoot.
                        <br />
                        <br />
                        On top of software development, I am very passioniate about music. In my time at Iowa State, I played in a band and was a member of the GENRE
                        music club. I play guitar, and I'm currently learning the piano. Check out the music tab to see what I've been listening to on Spotify!
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default AboutMe;
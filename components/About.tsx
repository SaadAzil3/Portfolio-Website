import React from "react";
import Section from "./Section";
import {AiFillThunderbolt} from "react-icons/ai";
const About = () => {
    return (
        <section className="about-section" id="about">
            <Section title="About Me" titleNum="01"/>
            <div className="about-text">
                <div>
                    <div className="desc">
                        <p>
                            I am Saad Azil, a third-year Computer Science student specializing in Network and Security. I am passionate about programming and cybersecurity, particularly in mobile and web app pentesting and Ethical Hacking.
                        </p>
                        <p>
                            I love Sharing my Experiences and my knowledge with others, Actually I have an Medium account in which I post my diary as a computer science student and my experiences with CTF and educationall articles. 
                        </p>
                        <p>Here are a few technologies and skills I have been working with recently:</p>
                    </div>
                    <ul className="skills-section">
                        <li className="skills-icon">
                        <AiFillThunderbolt 
                            className="fa-solid fa-bolt"
                        /> Networking
                        </li>
                        <li className="skills-icon">
                        <AiFillThunderbolt 
                            className="fa-solid fa-bolt"
                        /> Linux System Admin
                        </li>
                        <li className="skills-icon">
                        <AiFillThunderbolt 
                            className="fa-solid fa-bolt"
                        /> Ethical Hacking
                        </li>
                        <li className="skills-icon">
                        <AiFillThunderbolt 
                            className="fa-solid fa-bolt"
                        /> Penetration testing
                        </li>
                        <li className="skills-icon">
                        <AiFillThunderbolt 
                            className="fa-solid fa-bolt"
                        /> Web App Security
                        </li>
                        <li className="skills-icon">
                        <AiFillThunderbolt 
                            className="fa-solid fa-bolt"
                        /> Python/C++/Java
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;
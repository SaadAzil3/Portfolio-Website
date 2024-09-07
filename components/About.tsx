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
                            I am currently pursuing my master's degree in Network Administration and Security at the University of Bejaia. With a deep passion for cybersecurity, I am focused on learning and developing skills in penetration testing.

                        </p>
                        <p>
                             Every day, I dedicate myself to expanding my knowledge in this field by learning new techniques, tools, and methodologies. I actively participate in Capture The Flag (CTF) competitions and Hackathons to gain hands-on experience, improve my problem-solving abilities, and stay updated with the latest trends in cybersecurity.
                        <p>Here are a few technologies and skills I have been working with recently:</p>
                    </div>
                    <ul className="skills-section">
                        <li className="skills-icon">
                        <AiFillThunderbolt 
                            className="fa-solid fa-bolt"
                        /> Vulnerability Assessment
                        </li>
                        <li className="skills-icon">
                        <AiFillThunderbolt 
                            className="fa-solid fa-bolt"
                        /> Networking
                        </li>
                        <li className="skills-icon">
                        <AiFillThunderbolt 
                            className="fa-solid fa-bolt"
                        /> Operating Systems (Linux, Windows)
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
                        /> Web Pentesting
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

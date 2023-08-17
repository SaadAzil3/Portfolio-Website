import React from "react";
import Section from "./Section";
import Image from "next/image";
import {BsGithub,BsMedium,BsInstagram,BsLinkedin} from "react-icons/bs";
import { keylogger, password, active, wireshark } from "@/public/assets";
const Projects = () => {
    return (
        <section className="about-section" id="projects">
            <Section title="Some Things I have Built" titleNum="03"/>
            <div className="project-section">
                <div className="img-comtainer">
                    <a href="">
                        <div>
                            <Image src={active} alt="logo" className="project-img"/>
                        </div>
                    </a>
                    <div className="project-desc">
                        <p className="title" dir="rtl">
                            Featured Project
                        </p>
                        <h3>
                            Active Directory Exploit
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A aperiam, debitis facilis non, ea maiores quibusdam neque repellendus illum omnis nesciunt beatae itaque voluptatum ad nemo praesentium fugiat qui sapiente!
                        </p>
                        <ul className="tech-used">
                            <li>
                                Kali Linux
                            </li>
                            <li>
                                Window Active Directory
                            </li>
                            <li>
                                PowerShell
                            </li>
                            <li>
                                BashScript
                            </li>
                        </ul>
                        <div>
                            <a href="">
                                <BsMedium 
                                    className="fa-brands fa-medium"
                                />
                            </a>
                            <a href="">
                                <BsGithub 
                                    className="fa-brands fa-github"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="project-section">
                <div className="img-comtainer">
                    <a href="">
                        <div>
                            <Image src={keylogger} alt="logo" className="project-img"/>
                        </div>
                    </a>
                    <div className="project-desc">
                        <p className="title" dir="rtl">
                            Featured Project
                        </p>
                        <h3>
                            Advanced Keylogger
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A aperiam, debitis facilis non, ea maiores quibusdam neque repellendus illum omnis nesciunt beatae itaque voluptatum ad nemo praesentium fugiat qui sapiente!
                        </p>
                        <ul className="tech-used">
                            <li>
                                Python
                            </li>
                            <li>
                                Linux
                            </li>
                        </ul>
                        <div>
                            <a href="">
                            <i className="fa-brands fa-medium"></i>
                            </a>
                            <a href="">
                            <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="project-section">
                <div className="img-comtainer">
                    <a href="">
                        <div>
                            <Image src={wireshark} alt="logo" className="project-img"/>
                        </div>
                    </a>
                    <div className="project-desc">
                        <p className="title" dir="rtl">
                            Featured Project
                        </p>
                        <h3>
                            Network Traffic Analyst
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A aperiam, debitis facilis non, ea maiores quibusdam neque repellendus illum omnis nesciunt beatae itaque voluptatum ad nemo praesentium fugiat qui sapiente!
                        </p>
                        <ul className="tech-used">
                            <li>
                                Linux
                            </li>
                            <li>
                                Window
                            </li>
                            <li>
                                Wireshark
                            </li>
                            <li>
                                BashScript
                            </li>
                        </ul>
                        <div>
                            <a href="">
                            <i className="fa-brands fa-medium"></i>
                            </a>
                            <a href="">
                            <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="project-section">
                <div className="img-comtainer">
                    <a href="">
                        <div>
                            <Image src={password} alt="logo" className="project-img"/>
                        </div>
                    </a>
                    <div className="project-desc">
                        <p className="title" dir="rtl">
                            Featured Project
                        </p>
                        <h3>
                            Password Manager
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A aperiam, debitis facilis non, ea maiores quibusdam neque repellendus illum omnis nesciunt beatae itaque voluptatum ad nemo praesentium fugiat qui sapiente!
                        </p>
                        <ul className="tech-used">
                            <li>
                                Python
                            </li>
                            <li>
                                Tkinter
                            </li>
                            <li>
                                SQL
                            </li>
                        </ul>
                        <div>
                            <a href="">
                            <i className="fa-brands fa-medium"></i>
                            </a>
                            <a href="">
                            <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default Projects;
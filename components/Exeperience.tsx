import React from "react-dom"
import Section from "./Section";
import Bachelor from "./Works/Bachelor";
import { useState } from "react";
import { Certificate } from "crypto";
import Certifications from "./Works/Certifications";

const Experience = () => {
    const [workBachelor, setWorkBachelor] = useState(true);
    const [workCert, setWorkCert] = useState(false);
    const handleBachelor = () => {
        setWorkBachelor(true);
        setWorkCert(false);
    }
    const handleCert = () => {
        setWorkBachelor(false);
        setWorkCert(true);
    }
    return(
        <section className="about-section" id="experience">
            <Section title="Education and Experience" titleNum="02"/>
            <div className="ex-section">
                <ul>
                    <li onClick={handleBachelor} className={`${workBachelor ? "focus" : "ex-focus"} ex-focus`}>
                        
                        Education
                    </li>
                    <li onClick={handleCert} className={`${workCert ? "focus" : "ex-focus"} ex-focus`}>
                        
                        Certifications
                    </li>
                </ul>
                {workBachelor && <Bachelor />}
                {workCert && <Certifications />}
            </div>
        </section>
    );
}

export default Experience;

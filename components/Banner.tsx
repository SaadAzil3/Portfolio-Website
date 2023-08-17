import React from "react";
import {motion} from "framer-motion"
 
const Banner = () => {
    return (
        <section id="home" className="home-section">
            
            <motion.h3 
                initial= {{y:10, opacity: 0}}
                animate= {{y:0, opacity: 1}}
                transition= {{duration: 0.5, delay: 0.6}}
                className="top-title">Hi, my name is
            </motion.h3>
            <motion.h1
                initial= {{y:10, opacity: 0}}
                animate= {{y:0, opacity: 1}}
                transition= {{duration: 0.5, delay: 0.7}}
                className="middle-title"
            >
                Saad Azil. <span className="middle-title-span">Computer Science Student.</span>
            </motion.h1>
            <motion.p
                initial= {{y:10, opacity: 0}}
                animate= {{y:0, opacity: 1}}
                transition= {{duration: 0.5, delay: 0.8}}
                className="middle-title-p"
            >
                computer science student at the University of Bejaia, a programmer. I am interested in the field of cybersecurity and penetration testing. I find great joy in sharing my experiences with others. Every day, I strive to expand my knowledge and experience in this field.
                
                    <a href="" className="learn-more" target="_blank">
                        <span>Learn More</span>
                        <span className="line-hidden-span"></span>
                    </a>
                
            </motion.p>
            <motion.button 
                initial= {{y:10, opacity: 0}}
                animate= {{y:0, opacity: 1}}
                transition= {{duration: 0.5, delay: 0.9}}
                className="button-resume color-btn" >
                Check out my Projects!
            </motion.button>
        </section>
    );
};

export default Banner;
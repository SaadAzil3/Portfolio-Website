import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import {useRef, useState} from "react"
import {BsGithub,BsMedium,BsInstagram,BsLinkedin} from "react-icons/bs";
import {TbHexagonLetterS} from "react-icons/tb";
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import {ImCross} from "react-icons/im";
const Navbar = () => {
    const ref = useRef<string | any>();
    const [showMenu, setShowMenu] = useState(false)
    const handleFocus = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        })
        const links = document.querySelectorAll(".nav-link");
        links.forEach(link => {
            link.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    }
    return (
    <div className="navbar">
        <div className="max-w-container h-full mx-auto py-1 flex items-center justify-between fontTitle">
            <div>
                <motion.div
                    initial= {{opacity: 0}}
                    animate= {{opacity: 1}}
                    transition={{duration: 0.5}}
                >
                    <div className="saadlogo letter-logo">
                        <TbHexagonLetterS />
                    </div>
                    
                </motion.div>
            </div>
            <div className="navBig">
                <ul className="flex ">
                    <Link 
                    href="#home" 
                    className="flex homeNav nav-link"
                    onClick={handleFocus}
                    >
                    <motion.li
                        initial= {{y:-10, opacity: 0}}
                        animate= {{y:0, opacity: 1}}
                        transition= {{duration: 0.1}}
                    >Home</motion.li>
                    </Link>
                    <Link onClick={handleFocus} href="#about" className="flex homeNav nav-link">
                    
                    <motion.li
                        initial= {{y:-10, opacity: 0}}
                        animate= {{y:0, opacity: 1}}
                        transition= {{duration: 0.1, delay: 0.1}}
                    > 
                    <span className="spanNavColor">1. </span>
                    About</motion.li>
                    </Link>
                    <Link onClick={handleFocus} href="#experience" className="flex homeNav nav-link">
                    
                    <motion.li
                        initial= {{y:-10, opacity: 0}}
                        animate= {{y:0, opacity: 1}}
                        transition= {{duration: 0.1, delay: 0.2}}
                    >
                    <span className="spanNavColor">2. </span>    
                     Experience</motion.li>
                    </Link>
                    <Link onClick={handleFocus} href="#projects" className="flex homeNav nav-link">
                    
                    <motion.li
                        initial= {{y:-10, opacity: 0}}
                        animate= {{y:0, opacity: 1}}
                        transition= {{duration: 0.1, delay: 0.3}}
                    >
                    <span className="spanNavColor">3. </span> 
                    Projects</motion.li>
                    </Link>
                    <Link onClick={handleFocus} href="#contact" className="flex homeNav nav-link">
                    
                    <motion.li
                        initial= {{y:-10, opacity: 0}}
                        animate= {{y:0, opacity: 1}}
                        transition= {{duration: 0.1, delay: 0.4}}
                    > 
                    <span className="spanNavColor">4. </span>
                    Contact</motion.li>
                    </Link>
                </ul>
                <a href="/assets/images/resume.pdf" target="_blank">
                    <motion.button
                        initial= {{opacity: 0}}
                        animate= {{opacity: 1}}
                        transition= {{duration:0.5, delay: 0.4}}
                        className="button-resume"
                    >Resume</motion.button>
                </a>
            </div>
            <div className="menuBar"
                onClick={() => setShowMenu(true)}
            >
                <span className="bar"></span>
                <span className="bar bar1"></span>
                <span className="bar"></span>
            </div>
            {
                showMenu && (
                    <div
                        ref={(node) => (ref.current=node)}
                        className="res-menu"
                    >
                        <motion.div
                            initial= {{y:20, opacity: 0}}
                            animate= {{y:0, opacity: 1}}
                            transition= {{duration: 0.1}}
                            className="animation-menu"
                        >
                            <ImCross
                                onClick={() => {setShowMenu(false)}}
                                className="fa-solid fa-xmark"
                                
                            />
                            <div>
                            <ul className="flex ">
                    <Link 
                    href="#home" 
                    className="flex homeNav nav-link"
                    onClick={handleFocus}
                    >
                    <motion.li
                        initial= {{x:20, opacity: 0}}
                        animate= {{x:0, opacity: 1}}
                        transition= {{duration:0.3}}
                    >Home</motion.li>
                    </Link>
                    <Link onClick={handleFocus} href="#about" className="flex homeNav nav-link">
                    
                    <motion.li
                        initial= {{x:20, opacity: 0}}
                        animate= {{x:0, opacity: 1}}
                        transition= {{duration:0.3, delay: 0.1}}
                    > 
                    <span className="spanNavColor">1. </span>
                    About</motion.li>
                    </Link>
                    <Link onClick={handleFocus} href="#experience" className="flex homeNav nav-link">
                    
                    <motion.li
                        initial= {{x:20, opacity: 0}}
                        animate= {{x:0, opacity: 1}}
                        transition= {{duration:0.3, delay: 0.2}}
                    >
                    <span className="spanNavColor">2. </span>    
                     Experience</motion.li>
                    </Link>
                    <Link onClick={handleFocus} href="#projects" className="flex homeNav nav-link">
                    
                    <motion.li
                        initial= {{x:20, opacity: 0}}
                        animate= {{x:0, opacity: 1}}
                        transition= {{duration:0.3, delay: 0.3}}
                    >
                    <span className="spanNavColor">3. </span> 
                    Projects</motion.li>
                    </Link>
                    <Link onClick={handleFocus} href="#contact" className="flex homeNav nav-link">
                    
                    <motion.li
                        initial= {{x:20, opacity: 0}}
                        animate= {{x:0, opacity: 1}}
                        transition= {{duration:0.3, delay: 0.4}}
                    > 
                    <span className="spanNavColor">4. </span>
                    Contact</motion.li>
                    </Link>
                </ul>
                <a href="/assets/images/resume.pdf" target="_blank">
                    <motion.button
                        initial= {{x:20, opacity: 0}}
                        animate= {{x:0, opacity: 1}}
                        transition= {{duration:0.3, delay: 0.7}}
                        className="button-resume"
                    >Resume</motion.button>
                </a>
                            </div>
                            <div className="social-icon-footer menu-icon">
            <div className="icons-bar">
            <motion.a 
    initial= {{y:20, opacity: 0}}
    animate= {{y:0, opacity: 1}}
    transition= {{duration:0.3, delay: 0.8}}
    href="https://github.com/SaadAzil3" target="_blank">
    <span className="icon">            
        <BsGithub 
            className="fa-brands fa-github"
        />
    </span>
</motion.a>
<motion.a
    initial= {{y:20, opacity: 0}}
    animate= {{y:0, opacity: 1}}
    transition= {{duration:0.3, delay: 0.9}}
    href="https://www.linkedin.com/in/saad-azil-1349aa250/" target="_blank">
    <span className="icon">
        <BsLinkedin
            className="fa-brands fa-linkedin"
        />
                        
    </span>
</motion.a>
<motion.a 
    initial= {{y:20, opacity: 0}}
    animate= {{y:0, opacity: 1}}
    transition= {{duration:0.3, delay: 1}}
    href="https://medium.com/@azilsaad06" target="_blank">
    <span className="icon">
        <BsMedium 
            className="fa-brands fa-medium"
        /> 
    </span>
</motion.a>


            </div>
            </div>
                        </motion.div>
                    </div>
                    
                )
            }
        </div>
        <motion.div 
            animate={{ y: -3000 }}
            transition={{ delay: 2.5 }}
            className="reload-animation">
            <motion.div
                
            >
                <TbHexagonLetterS 
                />
                
            </motion.div>
            <AiOutlineLoading3Quarters 
            
                className="loading"
            />
        </motion.div>
    </div>
    );
};
export default Navbar
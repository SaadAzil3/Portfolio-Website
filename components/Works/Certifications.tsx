import { motion } from "framer-motion";
import {FaShare} from "react-icons/fa";
const Certifications = () => {
    return(
        <motion.div
            initial= {{opacity: 0}}
            animate= {{opacity: 1}}
            transition= {{duration:0.2}}
            className="first-ex"
        >
            <h3 >
            Certifications
            </h3>  
            <p>
                Sep 2021 - Present
            </p>
            <ul>
                <li>
                    <FaShare
                        className="fa-solid fa-share"
                    />
                    Python (Basic) programming certificate from Hackerrank <a className="cert-link" target="_blank" href="https://www.hackerrank.com/certificates/e1c937e2be84">see Certificate</a>
                </li>
            </ul>
        </motion.div>
    );
}

export default Certifications;
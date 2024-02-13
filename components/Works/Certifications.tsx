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
                    The Complete Networking Fundamentals Course. Your CCNA start <a className="cert-link" target="_blank" href="https://www.udemy.com/certificate/UC-aad32535-6b9f-4832-a9d3-d188356dc66b/">see Certificate</a>
                </li>
                <li>
                    <FaShare
                        className="fa-solid fa-share"
                    />
                    Python (Basic) programming certificate from Hackerrank <a className="cert-link" target="_blank" href="https://www.hackerrank.com/certificates/e1c937e2be84">see Certificate</a>
                </li>
                <li>
                    <FaShare
                        className="fa-solid fa-share"
                    />
                    Advent of Cyber 2023 Certificate Of Completion <a className="cert-link" target="_blank" href="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-1GTZVFGV6E.png">see Certificate</a>
                </li>
            </ul>
        </motion.div>
    );
}

export default Certifications;

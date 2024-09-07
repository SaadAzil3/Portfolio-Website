import { motion } from "framer-motion";
import {FaShare} from "react-icons/fa";
const Bachelor = () => {
    return(
        <motion.div
            initial= {{opacity: 0}}
            animate= {{opacity: 1}}
            transition= {{duration:0.2}}
            className="first-ex"
        >
            <h3 >
                Bachelor Degree <span> @Univ of Bejaia</span>
            </h3>  
            <p>
                Sep 2021 - June 2024
            </p>
            <ul>
                <li>
                    <FaShare
                        className="fa-solid fa-share"
                    />
                    3rd Year Computer Science Student @University Of Bejaia specialized in Network and Security
                </li>
            </ul>
        </motion.div>
        <motion.div
            initial= {{opacity: 0}}
            animate= {{opacity: 1}}
            transition= {{duration:0.2}}
            className="first-ex"
        >
            <h3 >
                Master Degree <span> @Univ of Bejaia</span>
            </h3>  
            <p>
                Sep 2024 - Present
            </p>
            <ul>
                <li>
                    <FaShare
                        className="fa-solid fa-share"
                    />
                    3rd Year Computer Science Student @University Of Bejaia specialized in Network and Security
                </li>
            </ul>
        </motion.div>
    );
}

export default Bachelor;

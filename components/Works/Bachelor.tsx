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
                Sep 2021 - Present
            </p>
            <ul>
                <li>
                    <FaShare
                        className="fa-solid fa-share"
                    />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, tenetur.
                </li>
                <li>
                    <FaShare
                        className="fa-solid fa-share"
                    />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, tenetur.
                </li>
                <li>
                    <FaShare
                        className="fa-solid fa-share"
                    />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, tenetur.
                </li>
            </ul>
        </motion.div>
    );
}

export default Bachelor;
import { motion } from "framer-motion";

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
                    <i className="fa-solid fa-share"></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, tenetur.
                </li>
                <li>
                    <i className="fa-solid fa-share"></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, tenetur.
                </li>
                <li>
                    <i className="fa-solid fa-share"></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, tenetur.
                </li>
            </ul>
        </motion.div>
    );
}

export default Bachelor;
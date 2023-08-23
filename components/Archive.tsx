import {motion} from "framer-motion"
import ArchiveCards from "./ArchiveCards";
import { useState } from "react";
import React from "react-dom"

const Archive = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <div className="archive-section">
            <div className="archive-container">
                <h2 className="title">Some Things I have Built</h2>
                <p className="sub-title">view the archive</p>
            </div>
            <div className="cards-project">
                <ArchiveCards 
                title="ReactBD web development company"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Linux", "Windows", "Python"]}
                link="" 
                />
                <ArchiveCards 
                title="ReactBD web development company"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Linux", "Windows", "Python"]}
                link="" 
                />
                <ArchiveCards 
                title="ReactBD web development company"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Linux", "Windows", "Python"]}
                link="" 
                />
                <ArchiveCards 
                title="ReactBD web development company"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Linux", "Windows", "Python"]}
                link="" 
                />
                <ArchiveCards 
                title="ReactBD web development company"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Linux", "Windows", "Python"]}
                link="" 
                />
                <ArchiveCards 
                title="ReactBD web development company"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Linux", "Windows", "Python"]}
                link="" 
                />
                {
                    showMore && (
                        <>
                            <motion.div
                                initial= {{opacity: 0}}
                                animate= {{opacity: 1}}
                                transition= {{delay:0.1}}
                            >
                                <ArchiveCards 
                                    title="ReactBD web development company"
                                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                                    listItem={["Linux", "Windows", "Python"]}
                                    link="" 
                                />
                            </motion.div>
                            <motion.div
                                initial= {{opacity: 0}}
                                animate= {{opacity: 1}}
                                transition= {{delay:0.2}}
                            >
                                <ArchiveCards 
                                    title="ReactBD web development company"
                                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                                    listItem={["Linux", "Windows", "Python"]}
                                    link="" 
                                />
                            </motion.div>
                            <motion.div
                                initial= {{opacity: 0}}
                                animate= {{opacity: 1}}
                                transition= {{delay:0.5}}
                            >
                                <ArchiveCards 
                                    title="ReactBD web development company"
                                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                                    listItem={["Linux", "Windows", "Python"]}
                                    link="" 
                                />
                            </motion.div>
                            <motion.div
                                initial= {{opacity: 0}}
                                animate= {{opacity: 1}}
                                transition= {{delay:0.6}}
                            >
                                <ArchiveCards 
                                    title="ReactBD web development company"
                                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                                    listItem={["Linux", "Windows", "Python"]}
                                    link="" 
                                />
                            </motion.div>
                            <motion.div
                                initial= {{opacity: 0}}
                                animate= {{opacity: 1}}
                                transition= {{delay:0.7}}
                            >
                                <ArchiveCards 
                                    title="ReactBD web development company"
                                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                                    listItem={["Linux", "Windows", "Python"]}
                                    link="" 
                                />
                            </motion.div>
                            <motion.div
                                initial= {{opacity: 0}}
                                animate= {{opacity: 1}}
                                transition= {{delay:0.8}}
                            >
                                <ArchiveCards 
                                    title="ReactBD web development company"
                                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                                    listItem={["Linux", "Windows", "Python"]}
                                    link="" 
                                />
                            </motion.div>
                            <motion.div
                                initial= {{opacity: 0}}
                                animate= {{opacity: 1}}
                                transition= {{delay:0.9}}
                            >
                                <ArchiveCards 
                                    title="ReactBD web development company"
                                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                                    listItem={["Linux", "Windows", "Python"]}
                                    link="" 
                                />
                            </motion.div>
                            <motion.div
                                initial= {{opacity: 0}}
                                animate= {{opacity: 1}}
                                transition= {{delay:1}}
                            >
                                <ArchiveCards 
                                    title="ReactBD web development company"
                                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                                    listItem={["Linux", "Windows", "Python"]}
                                    link="" 
                                />
                            </motion.div>
                            
                        </>
                    )
                }
            </div>
            <div className="show-more">
                
                {
                    showMore ? (
                        <button onClick={() => setShowMore(false)}>
                            Show Less
                        </button>
                    ) : (
                        <button onClick={() => setShowMore(true)}>
                            Show More
                        </button>
                    )
                }

            </div>
        </div>
    );
}

export default Archive
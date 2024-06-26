import {BsGithub,BsMedium,BsInstagram,BsLinkedin} from "react-icons/bs";
import React from "react"
const LeftSide = () => {
    return (
        <div className="social-icon">
            <div className="icons-bar">
                <a href="https://github.com/SaadAzil3" target="_blank">
                    <span className="icon">
                        
                            <BsGithub 
                                className="fa-brands fa-github"
                            />
                        

                    </span>
                </a>
                <a href="https://www.linkedin.com/in/saad-azil-1349aa250/" target="_blank">
                    <span className="icon">
                        <BsLinkedin
                            className="fa-brands fa-linkedin"
                        />
                        
                    </span>
                </a>
                <a href="https://medium.com/@azilsaad06" target="_blank">
                    <span className="icon">
                        <BsMedium 
                            className="fa-brands fa-medium"
                        />
                    
                    </span>
                </a>
            </div>
            <div className="before-icons"></div>
        </div>
    );
};

export default LeftSide ;

import React from "react-dom";
import {BsGithub,BsMedium,BsInstagram,BsLinkedin} from "react-icons/bs";
const Footer = () => {
    return (
        <>
            <section>
            <div className="social-icon-footer">
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
                <a href="https://www.instagram.com/azil.saad.3/" target="_blank">
                    <span className="icon">
                        <BsInstagram 
                            className="fa-brands fa-instagram"
                        />
                    </span>
                </a>
            </div>
            </div>
            </section>
        </>
    );
}


export default Footer
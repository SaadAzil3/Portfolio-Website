import React from "react";


const LeftSide = () => {
    return (
        <div className="social-icon">
            <div className="icons-bar">
                <a href="https://github.com/SaadAzil3" target="_blank">
                    <span className="icon">
                        <i className="fa-brands fa-github"></i> 
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/saad-azil-1349aa250/" target="_blank">
                    <span className="icon">
                        <i className="fa-brands fa-linkedin"></i> 
                    </span>
                </a>
                <a href="https://medium.com/@azilsaad06" target="_blank">
                    <span className="icon">
                    <i className="fa-brands fa-medium"></i> 
                    </span>
                </a>
                <a href="https://www.instagram.com/azil.saad.3/" target="_blank">
                    <span className="icon">
                    <i className="fa-brands fa-instagram"></i> 
                    </span>
                </a>
            </div>
            <div className="before-icons"></div>
        </div>
    );
};

export default LeftSide ;
import React from "react-dom"

interface Props{
    title: string
    desc: string
    listItem: string[]
    link: string
}

const ArchiveCards = ({title, desc, listItem, link}: Props) => {
    return (
        <a href={link} target="_blank">
            <div className="card">
            <div className="cards-icons">
                <i className="fa-regular fa-folder icon"></i>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
            <div >
                <h2 className="card-title">
                    {title}
                </h2>
                <p>
                   {desc}
                </p>
            </div>
            <ul className="tech-used">
                {
                    listItem.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))
                }
                
            </ul>
        </div>
        </a>
    );
}

export default ArchiveCards
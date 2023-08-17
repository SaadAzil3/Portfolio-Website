interface props{
    title: string,
    titleNum: string
}

const Section = ({title, titleNum}: props) => {
    return (
        <h2 className="about-title">
            <span>{titleNum}. </span>{title}
            <span className="about-line"></span>
        </h2>
    );
}

export default Section;
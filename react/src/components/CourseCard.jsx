function CourseCard ({ image, altText, title, description, link}) {
    return (
        <div class="card">
                    <img src={image} alt={altText}/>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href={link} class="btn">Ver Mais</a>
                </div>
    );
}
export default CourseCard;
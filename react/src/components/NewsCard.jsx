function NewsCards({image, altText, title, description, link}) {
    return (
        <div class="noticia">
                <img src={image} alt={altText}/>
                <div class="overlay">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href={link}>Ver Mais</a>
                </div>
            </div>
    );
}
export default NewsCards;
import NewsCard from "./NewsCard";
import tec_unimar from "../assets/images/noticias/tec_unimar.jpg"
import unimarTec from "../assets/images/noticias/unimar_tech_summit.jpg"

const news = [
    {
        image: tec_unimar,
        altText:"Unimar Tech Summit",
        title: "Unimar Tech Summit",
        description: "Participe do maior encontro de tecnologia e inovação do interior paulista.",
        link: "https://lets.4.events/unimar-tech-summit-2025-C11575E131",

    },
    {
        image: unimarTec,
        altText:"Parque Tecnológico TecUnimar",
        title: "TecUnimar: Parque Tecnológico",
        description: "A Unimar inaugura o primeiro Parque Tecnológico da região.</",
        link: "hthttps://tec.unimar.br/",

    }
]
function NewSection () {
    return (
        <section id="noticias">
        <h2>Últimas Notícias</h2>
        <div class="cards">
            {news.map((news) => (
                <NewsCard
                    key={news.title}
                    image={news.image}
                    altText={news.altText}
                    description={news.description}
                    link={news.link}
                />
            ))}
        </div>
        </section>
    );
}
export default NewSection;
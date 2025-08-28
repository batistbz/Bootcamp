import ads from "../assets/images/cursos/ads.jpg";
import bcc from "../assets/images/cursos/bcc.jpg";
import ia from  "../assets/images/cursos/ia.png";
import cyberseguranca from "../assets/images/cursos/cyberseguranca.webp";
import CourseCard from "./CourseCard";

const course = [
    {
        image: ads,
        altText: "Curso ADS",
        title: "Análise e Desenvolvimento de Sistemas",
        description: "Aprenda a desenvolver sistemas e aplicativos para diferentes plataformas. Curso altamente prático e focado no mercado de trabalho.",
        link: "https://oficial.unimar.br/cursos/analise-e-desenvolvimento-de-sistemas/",
    },
    {
        image: bcc,
        altText: "Curso BCC",
        title: "Bacharelado em Ciência da Computação",
        description: "Prepare-se para atuar em áreas como desenvolvimento de software, inteligência artificial e mais.Fundamentos e inovação para o futuro",
        link: "https://oficial.unimar.br/cursos/ciencia-da-computacao/",
    },
    {
        image: ia,
        altText: "Curso IA",
        title: "Bacharelado em Inteligência Artificial",
        description: "Explore o universo da IA e suas aplicações no mercado. Aprenda a construir algoritmos inteligentes e inovadores.",
        link: "https://oficial.unimar.br/bacharelado-em-inteligencia-artificial/",
    },
    {
        image: cyberseguranca,
        altText: "Curso Cibersegurança",
        title: "Cibersegurança e Infraestrutura de Redes",
        description: "Ideal para quem quer ser protagonista no universo da proteção digital e infraestrutura tecnológica.",
        link: "https://oficial.unimar.br/ciberseguranca-e-infraestrutura-de-redes/",
    }
];

function CourseSection () {
    return (
        <section id="cursos" class="cursos">
            <div class="container">
                <h2>Cursos de Tecnologia UNIMAR</h2>
                <div class="cards">
                    {course.map((course) => (
                        <CourseCard
                             key={course.title}
                            image={course.image}
                            altText={course.altText}
                            title={course.title}
                            description={course.description}
                            link={course.link}
                            />
                    ))}
                </div>
                </div>                
                </section>
    );
}

export default CourseSection;
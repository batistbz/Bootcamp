import twitter from '../assets/images/twitter.png'
import instagram from '../assets/images/instagram.png'
import youtube from '../assets/images/youtube.png'

const cards = [
    {
        image: twitter,
        altText: "Twitter",
        title:"Twitter",
        description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        link: "https://x.com/?lang=pt",
    },
    {
        image: instagram,
        altText: "Instagram",
        title: "Instagram",
        description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        link: "https://www.instagram.com/",
    },
    {
        image: youtube,
        altText: "Youtube",
        title: "Youtube",
        description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        link:"https://www.youtube.com/",
    }
];
        function CSection (){
            return (
                <section id="cards" class="cards">
            <div class="container">
                <div class="cards">
                    {course.map((cards) => (
                        <CourseCard
                             key={cards.title}
                            image={cards.image}
                            altText={cards.altText}
                            title={cards.title}
                            description={cards.description}
                            link={cards.link}
                            />
                    ))}
                </div>
                </div>                
                </section>
            );
        }
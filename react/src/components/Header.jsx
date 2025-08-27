import logounimar from "../assets/images/logo.svg";
import banner from "../assets/images/unimar_vestibular_banner.jpg";

function Header () {
    return (
        <header>
        <div className="menu">
            <img src={logounimar} alt="Logo UNIMAR" className="logo"/>

            <ul className="nav-links">
                <li><a href="#cursos">Cursos</a></li>
                <li><a href="#noticias">Notícias</a></li>
                <li><a href="#formulario">Contato</a></li>
            </ul>
        </div>

        {/* Banner para vestibular */}
        <a
            href="https://oficial.unimar.br/vestibular/?utm_source=&utm_medium=&utm_campaign=&utm_content=&utm_term=vestibular%20unimar&gad_source=1&gad_campaignid=22919197879&gbraid=0AAAAACvJPxAy_MQ-yj6QAWj1o9shJQ6RB&gclid=Cj0KCQjw8KrFBhDUARIsAMvIApYSC8tK9IhzMrYyT3G_qgt1XE2ijv7c4bc6M04Am5pU8NtaNk81nmEaAipXEALw_wcB#inscricoes">
            <img src={banner} alt="Unimar Vestibular Banner" className="banner"/>
        </a>
    </header>
    )
}

export default Header;
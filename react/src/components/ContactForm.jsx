import { useState } from "react";

function ContactForm() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Obrigado por entrar em contato!");
        setNome("");
        setEmail("");
    }
    
    return(

        <section id="formulario">
        <h2>Entre em Contato</h2>
        <form onSubmit={handleSubmit}>
            <div class="input-container">
                <input type="text" id="nome" name="nome" required placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
            </div>

            <div class="input-container">
                <input type="email" id="email" name="email" required placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <button type="submit">Enviar</button>
        </form>
    </section>
    );
}

export default ContactForm;
import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  const contacts = [
    {
      id: "email",
      name: "Email",
      text: "viniciusteodoro49@gmail.com",
      path: `mailto:viniciusteodoro49@gmail.com`,
      icon: <MdOutlineEmail className="contact_option-icon" />,
      label: "Envie uma menssagem",
    },
  ];
  return (
    <section id="contact">
      <h5>Fale comigo</h5>
      <h2>Contato</h2>
      <div className="container contact_container">
        <div className="contact_options">
          {contacts.map(({ name, path, icon, label, text, id }) => {
            return (
              <article className="contact_option" key={id}>
                {icon}
                <h4>{name}</h4>
                <h5>{text}</h5>
                <a href={path} target="_blank" rel="noreferrer">
                  {label}
                </a>
              </article>
            );
          })}
        </div>

        <form action="">
          <input type="text" name="name" placeholder="Nome Completo" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Sua Mensagem"
            required
          />
          <button type="submit" className="btn btn-primary">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

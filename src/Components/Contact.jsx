import '../styles/Contact.css';


const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1>📬 Contactez-nous</h1>
        <p>Nous sommes là pour répondre à toutes vos questions !</p>

        <div className="contact-info">
          <p><strong>Email :</strong> seakersXstore@gmail.com</p>
          <p><strong>Téléphone :</strong> +33 6 12 34 56 78</p>
          <p><strong>Adresse :</strong> 123 Rue des Sneakers, Lyon, France</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Votre nom" required />
          <input type="email" placeholder="Votre email" required />
          <textarea placeholder="Votre message" rows="5" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

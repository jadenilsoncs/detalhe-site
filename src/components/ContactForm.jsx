import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* COLUNA DA ESQUERDA: TEXTOS E ÍCONES */}
        <div className="contact-column">
          <h2 className="red-border-title">Contato</h2>
          <h3 className="contact-subtitle">Entre em contato conosco</h3>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <img src={publicUrl + "/assets/icons/location.svg"} alt="Localização" className="contact-icon-img" />
              <p><strong>Endereço:</strong> Rua União, 231, Bairro Serra verde - CEP: 35.530-000 - Cláudio - MG</p>
            </div>

            <div className="contact-info-item">
              <img src={publicUrl + "/assets/icons/whatsapp.svg"} alt="WhatsApp" className="contact-icon-img" style={{ filter: 'none', width: '30px' }} />
              <p><strong>WhatsApp:</strong> <span style={{ color: '#25D366', fontWeight: 'bold' }}>+55 (37) 9 9957-1010</span></p>
            </div>

            <div className="contact-info-item">
              <img src={publicUrl + "/assets/icons/phone.svg"} alt="Telefone" className="contact-icon-img" />
              <p><strong>Telefone:</strong> (37) 9 9957-1010</p>
            </div>

            <div className="contact-info-item">
              <img src={publicUrl + "/assets/icons/email.svg"} alt="E-mail" className="contact-icon-img" />
              <p><strong>E-mail:</strong> vendas@detalhemoveisaluminios.com.br</p>
            </div>
          </div>
        </div>

        {/* COLUNA DA DIREITA: FORMULÁRIO */}
        <div className="contact-column">
          <form className="contact-form-structure">
            {/* Linha Dupla (Nome e E-mail) */}
            <div className="form-row">
              <input type="text" placeholder="Nome" required />
              <input type="email" placeholder="E-mail" required />
            </div>

            <input type="tel" placeholder="Telefone" className="full-width-input" />
            <input type="text" placeholder="Endereço" className="full-width-input" />

            {/* Linha Dupla (Cidade e Estado) */}
            <div className="form-row">
              <input type="text" placeholder="Cidade" style={{ flex: 2 }} />
              <select style={{ flex: 1 }}>
                <option value="">UF</option>
                <option value="MG">MG</option>
                <option value="SP">SP</option>
                <option value="RJ">RJ</option>
              </select>
            </div>

            <textarea placeholder="Sua Mensagem" rows="5" required className="full-width-input"></textarea>
            <button type="submit" className="form-submit-button">ENVIAR MENSAGEM</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
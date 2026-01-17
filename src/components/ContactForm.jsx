import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  // Variável para garantir que as imagens funcionem tanto local quanto na Locaweb
  const publicUrl = process.env.PUBLIC_URL;

  // Estilos inline para garantir prioridade total e layout limpo
  const sectionStyle = { padding: '150px 5% 80px', backgroundColor: '#fff', minHeight: '80vh' };
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '60px',
    alignItems: 'flex-start'
  };
  const columnStyle = { flex: '1', minWidth: '320px' };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>

        {/* COLUNA DA ESQUERDA: TEXTOS E ÍCONES */}
        <div style={columnStyle}>
          <h2 className="red-border-title">Contato</h2>
          <h3 className="contact-subtitle">Entre em contato conosco</h3>

          <div className="contact-info-list">
            <div className="contact-info-item">
              {/* CORREÇÃO: Adicionado publicUrl */}
              <img
                src={publicUrl + "/assets/icons/location.svg"}
                alt="Localização"
                className="contact-icon-img"
              />
              <p><strong>Endereço:</strong> Rua União, 231, Bairro Serra verde - CEP: 35.530-000 - Cláudio - MG</p>
            </div>

            <div className="contact-info-item">
              {/* CORREÇÃO: Adicionado publicUrl e mantido o filtro verde */}
              <img
                src={publicUrl + "/assets/icons/whatsapp.svg"}
                alt="WhatsApp"
                className="contact-icon-img"
                style={{ filter: 'none', width: '30px' }}
              />
              <p><strong>WhatsApp:</strong> <span style={{ color: '#25D366', fontWeight: 'bold' }}>+55 (37) 9 9957-1010</span></p>
            </div>

            <div className="contact-info-item">
              {/* CORREÇÃO: Adicionado publicUrl */}
              <img
                src={publicUrl + "/assets/icons/phone.svg"}
                alt="Telefone"
                className="contact-icon-img"
              />
              <p><strong>Telefone:</strong> (37) 9 9957-1010</p>
            </div>

            <div className="contact-info-item">
              {/* CORREÇÃO: Adicionado publicUrl */}
              <img
                src={publicUrl + "/assets/icons/email.svg"}
                alt="E-mail"
                className="contact-icon-img"
              />
              <p><strong>E-mail:</strong> vendas@detalhemoveisaluminios.com.br</p>
            </div>
          </div>
        </div>

        {/* COLUNA DA DIREITA: FORMULÁRIO */}
        <div style={columnStyle}>
          <form className="contact-form-structure">
            <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
              <input type="text" placeholder="Nome" required style={{ flex: 1, padding: '14px' }} />
              <input type="email" placeholder="E-mail" required style={{ flex: 1, padding: '14px' }} />
            </div>
            <input type="tel" placeholder="Telefone" style={{ width: '100%', padding: '14px', marginBottom: '15px' }} />
            <input type="text" placeholder="Endereço" style={{ width: '100%', padding: '14px', marginBottom: '15px' }} />
            <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
              <input type="text" placeholder="Cidade" style={{ flex: 1, padding: '14px' }} />
              <select style={{ flex: 1, padding: '14px' }}>
                <option value="">Estado (UF)</option>
                <option value="MG">Minas Gerais</option>
                <option value="SP">São Paulo</option>
              </select>
            </div>
            <textarea placeholder="Sua Mensagem" rows="5" required style={{ width: '100%', padding: '14px', marginBottom: '15px' }}></textarea>
            <button type="submit" className="form-submit-button">ENVIAR MENSAGEM</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
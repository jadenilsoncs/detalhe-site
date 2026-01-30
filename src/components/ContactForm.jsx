import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { estadosBrasileiros } from '../data/estados';
import { cidadesAtendidas } from '../data/cidades'; // Importação das cidades
import './ContactForm.css';

const ContactForm = () => {
  const publicUrl = process.env.PUBLIC_URL || "";
  const [formData, setFormData] = useState({
    nome: '', email: '', telefone: '', endereco: '', cidade: '', estado: '', mensagem: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const SERVICE_ID = 'service_cs1x1db';
    const TEMPLATE_ID = 'template_ljqv29e';
    const PUBLIC_KEY = 'zvQnmLz46-VT8S0HJ';

    const templateParams = {
      name: formData.nome,
      from_name: formData.nome,
      from_email: formData.email,
      message: formData.mensagem,
      telefone: formData.telefone,
      endereco: formData.endereco,
      cidade: formData.cidade,
      estado: formData.estado,
      to_email: 'jadenilsoncs@gmail.com'
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { ...templateParams }, PUBLIC_KEY);
      setStatus({ type: 'success', message: 'Mensagem enviada com sucesso!' });
      setFormData({ nome: '', email: '', telefone: '', endereco: '', cidade: '', estado: '', mensagem: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Erro ao enviar. Tente pelo WhatsApp.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-column">
          <h2 className="red-border-title">Contato</h2>
          <h3 className="contact-subtitle">Entre em contato conosco</h3>
          <div className="contact-info-list">
            <div className="contact-info-item">
              <img src={publicUrl + "/assets/icons/location.svg"} alt="Localização" className="contact-icon-img" />
              <p><strong>Endereço:</strong> Estrada Corumbá, sn°, Km 1,5 - Povoado do Corumbá, Cláudio/MG, 35530-000</p>
            </div>
            <a href="https://wa.me/5537999571010" target="_blank" rel="noopener noreferrer" className="contact-info-item" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={publicUrl + "/assets/icons/whatsapp.svg"} alt="WhatsApp" className="contact-icon-img" style={{ width: '30px' }} />
              <p><strong>WhatsApp:</strong> <span style={{ color: '#25D366', fontWeight: 'bold' }}>+55 (37) 9 9957-1010</span></p>
            </a>
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

        <div className="contact-column">
          <form className="contact-form-structure" onSubmit={handleSubmit}>
            {status.message && (
              <div className={`form-status ${status.type === 'success' ? 'success' : 'error'}`}>
                {status.message}
              </div>
            )}
            <div className="form-row">
              <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
              <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
            </div>
            <input type="tel" name="telefone" placeholder="Telefone" className="full-width-input" value={formData.telefone} onChange={handleChange} />
            <input type="text" name="endereco" placeholder="Endereço" className="full-width-input" value={formData.endereco} onChange={handleChange} />

            <div className="form-row">
              {/* SELECT DE CIDADE */}
              <select name="cidade" style={{ flex: 2 }} value={formData.cidade} onChange={handleChange} required>
                <option value="">Selecione a Cidade</option>
                {cidadesAtendidas.map((cidade, index) => (
                  <option key={index} value={cidade.nome}>{cidade.nome}</option>
                ))}
                <option value="Outra">Outra cidade...</option>
              </select>

              {/* SELECT DE ESTADO */}
              <select name="estado" style={{ flex: 1 }} value={formData.estado} onChange={handleChange} required>
                <option value="">UF</option>
                {estadosBrasileiros.map(estado => (
                  <option key={estado.sigla} value={estado.sigla}>{estado.sigla}</option>
                ))}
              </select>
            </div>

            <textarea name="mensagem" placeholder="Sua Mensagem" rows="5" required className="full-width-input" value={formData.mensagem} onChange={handleChange}></textarea>
            <button type="submit" className="form-submit-button" disabled={loading}>
              {loading ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
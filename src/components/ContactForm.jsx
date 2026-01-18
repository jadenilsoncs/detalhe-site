import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { estadosBrasileiros } from '../data/estados';
import './ContactForm.css';

const ContactForm = () => {
  const publicUrl = process.env.PUBLIC_URL || "";
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    cidade: '',
    estado: '',
    mensagem: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Configurações do EmailJS - VOCÊ PRECISA CRIAR CONTA GRATUITA EM https://www.emailjs.com/
    // Substitua estes valores pelos seus após criar a conta:
    const SERVICE_ID = 'service_cs1x1db'; // Ex: 'service_xxxxx'
    const TEMPLATE_ID = 'template_ljqv29e'; // Ex: 'template_xxxxx'
    const PUBLIC_KEY = 'zvQnmLz46-VT8S0HJ'; // Ex: 'xxxxxxxxxxxxx'

    // Validação: Verifica se o EmailJS foi configurado
    if (SERVICE_ID === 'service_cs1x1db' || TEMPLATE_ID === 'template_ljqv29e' || PUBLIC_KEY === 'zvQnmLz46-VT8S0HJ') {
      setLoading(false);
      setStatus({ 
        type: 'error', 
        message: '⚠️ EmailJS não configurado! Por favor, configure seguindo as instruções no arquivo CONFIGURACAO_EMAILJS.md' 
      });
      return;
    }

    // Template do email que será enviado
    const templateParams = {
      from_name: formData.nome,
      from_email: formData.email,
      telefone: formData.telefone,
      endereco: formData.endereco,
      cidade: formData.cidade,
      estado: formData.estado,
      message: formData.mensagem,
      to_email: 'jadenilsoncs@gmail.com' // Email que receberá as mensagens
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus({ 
        type: 'success', 
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
      });
      // Limpa o formulário
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        cidade: '',
        estado: '',
        mensagem: ''
      });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      let errorMessage = 'Erro ao enviar mensagem. ';
      
      // Mensagens de erro mais específicas
      if (error.text) {
        errorMessage += `Detalhes: ${error.text}`;
      } else if (error.message) {
        errorMessage += `Erro: ${error.message}`;
      } else {
        errorMessage += 'Verifique se o EmailJS está configurado corretamente.';
      }
      
      errorMessage += ' Tente novamente ou entre em contato pelo WhatsApp.';
      
      setStatus({ 
        type: 'error', 
        message: errorMessage
      });
    } finally {
      setLoading(false);
    }
  };

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
          <form className="contact-form-structure" onSubmit={handleSubmit}>
            {/* Mensagem de status */}
            {status.message && (
              <div className={`form-status ${status.type === 'success' ? 'success' : 'error'}`}>
                {status.message}
              </div>
            )}

            {/* Linha Dupla (Nome e E-mail) */}
            <div className="form-row">
              <input 
                type="text" 
                name="nome"
                placeholder="Nome" 
                value={formData.nome}
                onChange={handleChange}
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="E-mail" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <input 
              type="tel" 
              name="telefone"
              placeholder="Telefone" 
              className="full-width-input"
              value={formData.telefone}
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="endereco"
              placeholder="Endereço" 
              className="full-width-input"
              value={formData.endereco}
              onChange={handleChange}
            />

            {/* Linha Dupla (Cidade e Estado) */}
            <div className="form-row">
              <input 
                type="text" 
                name="cidade"
                placeholder="Cidade" 
                style={{ flex: 2 }}
                value={formData.cidade}
                onChange={handleChange}
              />
              <select 
                name="estado"
                style={{ flex: 1 }} 
                value={formData.estado}
                onChange={handleChange}
              >
                <option value="">UF</option>
                {estadosBrasileiros.map(estado => (
                  <option key={estado.sigla} value={estado.sigla}>
                    {estado.sigla}
                  </option>
                ))}
              </select>
            </div>

            <textarea 
              name="mensagem"
              placeholder="Sua Mensagem" 
              rows="5" 
              required 
              className="full-width-input"
              value={formData.mensagem}
              onChange={handleChange}
            ></textarea>
            <button 
              type="submit" 
              className="form-submit-button"
              disabled={loading}
            >
              {loading ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
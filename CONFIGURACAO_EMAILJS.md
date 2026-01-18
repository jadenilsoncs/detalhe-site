# 📧 Configuração do EmailJS para Envio de Emails

## Passo a Passo para Configurar o Envio de Emails

### 1. Criar Conta no EmailJS (GRATUITO até 200 emails/mês)

1. Acesse: https://www.emailjs.com/
2. Clique em "Sign Up" e crie uma conta gratuita
3. Confirme seu email

### 2. Criar um Service (Serviço de Email)

1. No painel do EmailJS, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta de email
5. **Anote o SERVICE_ID** que será gerado (ex: `service_xxxxx`)

### 3. Criar um Template de Email

1. No painel, vá em **Email Templates**
2. Clique em **Create New Template**
3. Configure o template assim:

**Subject (Assunto):**
```
Nova Mensagem do Site - {{from_name}}
```

**Content (Corpo do Email):**
```
Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{telefone}}
Endereço: {{endereco}}
Cidade: {{cidade}}
Estado: {{estado}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada através do formulário de contato do site Detalhe Móveis.
```

4. **Anote o TEMPLATE_ID** que será gerado (ex: `template_xxxxx`)

### 4. Obter a Public Key

1. No painel, vá em **Account** → **General**
2. Copie a **Public Key** (ex: `xxxxxxxxxxxxx`)

### 5. Configurar no Código

1. Abra o arquivo: `src/components/ContactForm.jsx`
2. Encontre estas linhas (por volta da linha 30):

```javascript
const SERVICE_ID = 'seu_service_id'; // Ex: 'service_xxxxx'
const TEMPLATE_ID = 'seu_template_id'; // Ex: 'template_xxxxx'
const PUBLIC_KEY = 'sua_public_key'; // Ex: 'xxxxxxxxxxxxx'
```

3. Substitua pelos valores que você anotou:

```javascript
const SERVICE_ID = 'service_abc123'; // Seu SERVICE_ID aqui
const TEMPLATE_ID = 'template_xyz789'; // Seu TEMPLATE_ID aqui
const PUBLIC_KEY = 'sua-chave-publica-aqui'; // Sua PUBLIC_KEY aqui
```

### 6. Testar

1. Salve o arquivo
2. Acesse a página de Contato no site
3. Preencha o formulário
4. Clique em "ENVIAR MENSAGEM"
5. Verifique se o email chegou na sua caixa de entrada!

---

## ⚠️ Importante

- **Plano Gratuito**: 200 emails/mês (suficiente para começar)
- **Segurança**: A Public Key pode ficar no código front-end (é segura)
- **Email de Destino**: Configure no template do EmailJS qual email receberá as mensagens
- **Spam**: O EmailJS tem proteção anti-spam integrada

---

## 🆘 Problemas Comuns

**Email não está chegando?**
- Verifique se configurou corretamente o SERVICE_ID, TEMPLATE_ID e PUBLIC_KEY
- Verifique a caixa de spam
- Veja o console do navegador (F12) para erros

**Erro ao enviar?**
- Certifique-se de que os nomes das variáveis no template correspondem aos do código
- Verifique se a conta do EmailJS está ativa

---

## 📝 Variáveis Disponíveis no Template

- `{{from_name}}` - Nome do remetente
- `{{from_email}}` - Email do remetente
- `{{telefone}}` - Telefone
- `{{endereco}}` - Endereço
- `{{cidade}}` - Cidade
- `{{estado}}` - Estado (UF)
- `{{message}}` - Mensagem
- `{{to_email}}` - Email de destino (configurado no template)

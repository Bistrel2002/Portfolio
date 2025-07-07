# 📧 Guide de Configuration du Formulaire de Contact

Ce guide vous explique comment connecter votre formulaire de contact pour recevoir des emails. Vous avez **3 options** principales, de la plus simple à la plus avancée.

## 🚀 Option 1: EmailJS (Recommandé - Gratuit)

**Avantages**: Facile à configurer, 200 emails/mois gratuits, pas de serveur nécessaire

### Étapes de configuration:

1. **Créer un compte EmailJS**
   - Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
   - Créez un compte gratuit

2. **Configurer un service email**
   - Dans votre dashboard EmailJS, cliquez sur "Email Services"
   - Ajoutez votre service (Gmail, Outlook, etc.)
   - Suivez les instructions d'authentification

3. **Créer un template d'email**
   - Cliquez sur "Email Templates"
   - Créez un nouveau template
   - Utilisez ces variables dans votre template:
     ```
     From: {{user_name}} ({{user_email}})
     Phone: {{user_phone}}
     Subject: {{subject}}
     
     Message:
     {{message}}
     ```

4. **Récupérer vos identifiants**
   - **Public Key**: Dans "Account" > "General"
   - **Service ID**: Dans "Email Services"
   - **Template ID**: Dans "Email Templates"

5. **Configurer le code**
   - Ouvrez `src/contact-form.js`
   - Remplacez:
     ```javascript
     emailjs.init("YOUR_PUBLIC_KEY"); // Votre clé publique
     
     const response = await emailjs.send(
         'YOUR_SERVICE_ID',    // Votre Service ID
         'YOUR_TEMPLATE_ID',   // Votre Template ID
         templateParams
     );
     ```
   - Décommentez cette ligne:
     ```javascript
     new ContactFormHandler();
     ```

---

## 🌟 Option 2: Formspree (Plus Simple)

**Avantages**: Configuration en 2 minutes, 50 emails/mois gratuits

### Étapes de configuration:

1. **Créer un compte Formspree**
   - Allez sur [https://formspree.io/](https://formspree.io/)
   - Créez un compte gratuit

2. **Créer un nouveau form**
   - Cliquez sur "New Form"
   - Entrez votre email pour recevoir les messages
   - Copiez votre Form ID (ex: `xaygvpqw`)

3. **Configurer le code**
   - Ouvrez `src/contact-form.js`
   - Remplacez `YOUR_FORM_ID` par votre Form ID:
     ```javascript
     this.form.setAttribute('action', 'https://formspree.io/f/xaygvpqw');
     ```
   - Décommentez cette ligne:
     ```javascript
     new FormspreeHandler();
     ```

---

## 🔧 Option 3: Backend Node.js (Avancé)

**Avantages**: Contrôle total, pas de limite d'emails

### Créer un serveur backend simple:

1. **Créer le dossier backend**
   ```bash
   mkdir backend
   cd backend
   npm init -y
   npm install express nodemailer cors dotenv
   ```

2. **Créer `server.js`**
   ```javascript
   const express = require('express');
   const nodemailer = require('nodemailer');
   const cors = require('cors');
   require('dotenv').config();
   
   const app = express();
   
   app.use(cors());
   app.use(express.json());
   
   // Configuration email
   const transporter = nodemailer.createTransporter({
     service: 'gmail',
     auth: {
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASS
     }
   });
   
   app.post('/send-email', async (req, res) => {
     try {
       const { user_name, user_email, user_phone, subject, message } = req.body;
   
       const mailOptions = {
         from: process.env.EMAIL_USER,
         to: process.env.EMAIL_USER,
         subject: `Contact Form: ${subject}`,
         html: `
           <h3>Nouveau message de contact</h3>
           <p><strong>Nom:</strong> ${user_name}</p>
           <p><strong>Email:</strong> ${user_email}</p>
           <p><strong>Téléphone:</strong> ${user_phone}</p>
           <p><strong>Sujet:</strong> ${subject}</p>
           <p><strong>Message:</strong></p>
           <p>${message}</p>
         `
       };
   
       await transporter.sendMail(mailOptions);
       res.status(200).json({ message: 'Email envoyé avec succès' });
     } catch (error) {
       res.status(500).json({ error: 'Erreur lors de l\'envoi' });
     }
   });
   
   app.listen(3000, () => {
     console.log('Serveur démarré sur le port 3000');
   });
   ```

3. **Créer `.env`**
   ```
   EMAIL_USER=votre-email@gmail.com
   EMAIL_PASS=votre-mot-de-passe-app
   ```

4. **Modifier le frontend**
   ```javascript
   // Dans contact-form.js, créer une nouvelle classe:
   class BackendHandler {
     async handleSubmit(e) {
       e.preventDefault();
       const formData = new FormData(this.form);
       
       const response = await fetch('http://localhost:3000/send-email', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(Object.fromEntries(formData))
       });
       
       if (response.ok) {
         // Succès
       } else {
         // Erreur
       }
     }
   }
   ```

---

## 📋 Comparaison des Solutions

| Solution | Difficulté | Coût | Emails/mois | Serveur requis |
|----------|------------|------|-------------|----------------|
| **EmailJS** | ⭐⭐☆☆☆ | Gratuit | 200 | Non |
| **Formspree** | ⭐☆☆☆☆ | Gratuit | 50 | Non |
| **Backend Node.js** | ⭐⭐⭐⭐☆ | Gratuit | Illimité | Oui |

---

## 🎯 Recommandation

**Pour débuter**: Utilisez **Formspree** (le plus simple)
**Pour un portfolio professionnel**: Utilisez **EmailJS** (plus de fonctionnalités)
**Pour un projet commercial**: Créez votre **backend Node.js**

---

## 🔍 Test du Formulaire

1. Ouvrez votre portfolio dans le navigateur
2. Allez à la section Contact
3. Remplissez le formulaire
4. Vérifiez que vous recevez l'email
5. Testez aussi avec des champs vides (validation)

---

## 🐛 Résolution de Problèmes

### EmailJS ne fonctionne pas:
- Vérifiez vos identifiants dans `contact-form.js`
- Assurez-vous que votre template utilise les bonnes variables
- Checkez la console du navigateur pour les erreurs

### Formspree ne fonctionne pas:
- Vérifiez que votre Form ID est correct
- Assurez-vous d'avoir validé votre email chez Formspree

### Emails non reçus:
- Vérifiez votre dossier spam
- Assurez-vous que l'email de destination est correct

---

## 📞 Support

Si vous avez des problèmes, vérifiez:
1. La console du navigateur (F12)
2. Que tous les champs requis sont remplis
3. Que les identifiants sont corrects

**Votre formulaire est maintenant prêt à recevoir des messages !** 🎉 
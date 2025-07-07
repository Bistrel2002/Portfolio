# 🔧 Guide de Debug - Formulaire de Contact

## ✅ **Problèmes Corrigés :**

1. **Noms des champs HTML** ✅
   - `name="Name"` (au lieu de `user_name`)
   - `name="Email"` (au lieu de `user_email`) 
   - `name="Phone"` (au lieu de `user_phone`)
   - `name="Sujet"` (au lieu de `subject`)
   - `name="Message"` (au lieu de `message`)

2. **Variables du template EmailJS** ✅
   - Les noms correspondent maintenant : `Name`, `Email`, `Phone`, `Sujet`, `Message`

3. **Code de test supprimé** ✅
   - Plus d'alert qui bloque le formulaire

## 🔍 **Comment Tester :**

1. **Ouvrez la console du navigateur** (F12)
2. **Remplissez le formulaire** de contact
3. **Cliquez "Send Message"**
4. **Vérifiez les logs dans la console** :

### ✅ **Si ça marche :**
```
Données du formulaire: {Name: "John Doe", Email: "john@example.com", ...}
✅ Email envoyé avec succès: {status: 200, text: "OK"}
```

### ❌ **Si ça ne marche pas :**
```
❌ Erreur lors de l'envoi: Error
Code d'erreur: 400
Message d'erreur: "Invalid template ID"
```

## 🛠️ **Template EmailJS à Vérifier :**

Votre template doit contenir exactement ces variables :

```
Subject: Contact Us About: {{Sujet}}

From: {{Name}} ({{Email}})
Phone: {{Phone}}

Message:
{{Message}}
```

## 🚨 **Erreurs Fréquentes :**

### **Erreur 400 - Template invalide**
- ✅ Vérifiez que `template_byndwz2` existe
- ✅ Vérifiez que les variables `{{Name}}`, `{{Email}}`, etc. sont dans le template

### **Erreur 401 - Non autorisé** 
- ✅ Vérifiez votre Public Key: `E76FP56NHdRzrjbwt`
- ✅ Vérifiez votre Service ID: `portfolio_contact`

### **Erreur 404 - Service non trouvé**
- ✅ Vérifiez que le service `portfolio_contact` existe dans EmailJS

## 📧 **Template EmailJS Recommandé :**

Remplacez le contenu de votre template par :

```html
<h2>Nouveau message de contact</h2>

<p><strong>De:</strong> {{Name}}</p>
<p><strong>Email:</strong> {{Email}}</p>
<p><strong>Téléphone:</strong> {{Phone}}</p>
<p><strong>Sujet:</strong> {{Sujet}}</p>

<h3>Message:</h3>
<p>{{Message}}</p>

<hr>
<p><small>Envoyé depuis votre portfolio</small></p>
```

## 🔄 **Étapes de Test Complètes :**

1. **Actualisez la page** (Ctrl+F5)
2. **Ouvrez la console** (F12 → Console)
3. **Remplissez le formulaire** avec de vraies données
4. **Cliquez "Send Message"**
5. **Regardez les logs** dans la console
6. **Vérifiez votre email** (+ dossier spam)

## 📞 **Si ça ne marche toujours pas :**

1. **Copiez les logs d'erreur** de la console
2. **Vérifiez dans EmailJS** :
   - Que le service est actif
   - Que le template existe
   - Que les variables sont correctes
3. **Testez le template** directement dans EmailJS (bouton "Test It")

## 🎯 **CheckList Final :**

- [ ] Service EmailJS : `portfolio_contact` ✅
- [ ] Template ID : `template_byndwz2` ✅  
- [ ] Public Key : `E76FP56NHdRzrjbwt` ✅
- [ ] Variables template : `{{Name}}`, `{{Email}}`, `{{Phone}}`, `{{Sujet}}`, `{{Message}}` ✅
- [ ] Champs HTML : `name="Name"`, `name="Email"`, etc. ✅
- [ ] Code de test supprimé ✅

**Votre formulaire devrait maintenant fonctionner !** 🎉 
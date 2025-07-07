// Contact Form Handler with EmailJS
class ContactFormHandler {
    constructor() {
        this.init();
    }

    init() {
        // Initialize EmailJS with your public key
        emailjs.init("E76FP56NHdRzrjbwt"); 
        
        this.form = document.getElementById('contact-form');
        this.submitBtn = document.getElementById('submit-btn');
        this.btnText = document.querySelector('.btn-text');
        this.btnLoading = document.querySelector('.btn-loading');
        this.successMessage = document.getElementById('success-message');
        this.errorMessage = document.getElementById('error-message');
        
        this.attachEventListeners();
    }

    attachEventListeners() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        // Show loading state
        this.setLoadingState(true);
        this.hideMessages();
        
        try {
            // Get form data
            const formData = new FormData(this.form);
            const templateParams = {
                Name: formData.get('Name'),
                Email: formData.get('Email'),
                Phone: formData.get('Phone'),
                Sujet: formData.get('Sujet'),
                Message: formData.get('Message')
            };

            // Debug: Log des données envoyées
            console.log('Données du formulaire:', templateParams);

            // Send email using EmailJS
            const response = await emailjs.send(
                'portfolio_contact',      
                'template_byndwz2',       
                templateParams
            );

            console.log('✅ Email envoyé avec succès:', response);
            this.showSuccessMessage();
            this.form.reset();
            
        } catch (error) {
            console.error('❌ Erreur lors de l\'envoi:', error);
            
            // Debug détaillé de l'erreur
            if (error.status) {
                console.error('Code d\'erreur:', error.status);
                console.error('Message d\'erreur:', error.text);
            }
            
            this.showErrorMessage();
        } finally {
            this.setLoadingState(false);
        }
    }

    setLoadingState(loading) {
        this.submitBtn.disabled = loading;
        this.btnText.style.display = loading ? 'none' : 'block';
        this.btnLoading.style.display = loading ? 'block' : 'none';
    }

    showSuccessMessage() {
        this.successMessage.style.display = 'block';
        setTimeout(() => {
            this.successMessage.style.display = 'none';
        }, 5000);
    }

    showErrorMessage() {
        this.errorMessage.style.display = 'block';
        setTimeout(() => {
            this.errorMessage.style.display = 'none';
        }, 5000);
    }

    hideMessages() {
        this.successMessage.style.display = 'none';
        this.errorMessage.style.display = 'none';
    }
}

// Alternative: Formspree (plus simple)
class FormspreeHandler {
    constructor() {
        this.init();
    }

    init() {
        this.form = document.getElementById('contact-form');
        this.form.setAttribute('action', 'https://formspree.io/f/YOUR_FORM_ID'); // Remplacez par votre Form ID
        this.form.setAttribute('method', 'POST');
        
        this.attachEventListeners();
    }

    attachEventListeners() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        
        try {
            const response = await fetch(this.form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                document.getElementById('success-message').style.display = 'block';
                this.form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            document.getElementById('error-message').style.display = 'block';
        }
    }
}

// Initialize contact form handler
document.addEventListener('DOMContentLoaded', () => {
    new ContactFormHandler();
}); 
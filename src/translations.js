// Translation system for the portfolio
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_education: "Education", 
        nav_portfolio: "Portfolio",
        nav_competence: "Competence",
        nav_contact: "Contact",
        
        // Hero section
        hero_title: "Hellooo! It's <span>Bistrel</span>",
        hero_subtitle: "I've experience as a <span> </span>",
        hero_description: "21-year-old student in his third year at ALGOSUP, deeply immersed in advanced studies that focus on technology and software development. With a keen interest in both theoretical and practical applications, I'm building a strong foundation in programming, software engineering, and creative problem-solving. My experience at ALGOSUP has allowed me to work on cutting-edge projects, including FPGA design, augmented reality systems, and game development, showcasing my passion for innovation and technology-driven solutions. I'm constantly pushing boundaries to hone my skills and prepare for a dynamic career in tech.",
        
        // Buttons
        btn_hire: "Hire",
        btn_contact: "Contact",
        
        // Section headings
        section_education: "Education",
        section_portfolio: "Portfolio", 
        section_competence: "Competence",
        section_contact: "Contact <span>Me</span>",
        
        // Skills section
        technical_skills: "Technical Skills",
        professional_skills: "Professional Skills",
        
        // Contact form
        form_full_name: "Full Name",
        form_email: "Email",
        form_phone: "Phone Number",
        form_subject: "Subject",
        form_message: "Your Message",
        form_send: "Send Message",
        form_sending: "Sending...",
        form_success: "✅ Message sent successfully! I'll get back to you soon.",
        form_error: "❌ Failed to send message. Please try again.",
        
        // Portfolio projects
        project_locindoor_title: "LOCINDOOR",
        project_locindoor_role: "Role: <span>Developer, Project Manager, Technical Lead, Program Manager, Quality Assurance</span>",
        project_locindoor_description: "As the sole developer and creator of LOCINDOOR, I independently managed every aspect of the project—from initial concept and design to coding, testing, and deployment. I'm developing the augmented reality navigation system, integrated Bluetooth beacon technology, so as to ensure the application's reliability and user experience. This project demonstrates my ability to take full ownership, solve complex technical challenges, and deliver an innovative solution entirely on my own.",
        
        project_greencity_title: "GREEN CITY",
        project_greencity_role: "Role: <span>Project Manager</span>",
        project_greencity_description: "I had the opportunity to be the project manager of the Green City project. I managed the development of Green City by planning, distributing tasks, and facilitating communication within the team. I ensured that every feature aligned with the project's educational and environmental goals, while maintaining deadlines and a high-quality gameplay experience.",
        
        project_africawedding_title: "Africa Wedding",
        project_africawedding_role: "Role: <span>Frontend & Backend Developer</span>",
        project_africawedding_description: "I designed and developed the entire website, from frontend visuals to backend implementation. I integrated traditional African graphic elements to create an authentic user experience. My work resulted in a modern, personalized digital wedding invitation.",
        
        project_virtualprocessor_title: "Virtual Processor",
        project_virtualprocessor_role: "Role: <span>Software Developer</span>",
        project_virtualprocessor_description: "As a software developer, I designed and implemented a virtual processor and its interpreter in C, getting reference from the LC3 Architecture. I handled the architecture modeling, instruction execution code, and technical documentation to help in executing the program, and ensuring the project's portability.",
        
        project_quickestpath_title: "Quickest Path",
        project_quickestpath_role: "Role: <span>Software Developer</span>",
        project_quickestpath_description: "As a developer, I was responsible for verifying that the graph—containing 24 million nodes—was a true Directed Acyclic Graph (DAG) before implementing any pathfinding algorithms. I then optimized the core algorithm to compute the fastest path between two landmarks in under one second, combining bidirectional search with Dijkstra's. My work ensured both the structural integrity of the data and the high performance of the solution.",
        
        project_webfpga_title: "Web FPGA",
        project_webfpga_role: "Role: <span>Program Manager</span>",
        project_webfpga_description: "As Program Manager, I was responsible for creating the project's functional specification document by working closely with the client to understand and define their needs. I facilitated discussions, gathered requirements, and translated them into clear technical guidelines for the team. My role ensured that the final product aligned with the client's expectations and that all development efforts were focused on delivering real value.",
        
        // Links
        view_github: "View on GitHub",
        view_website: "View website"
    },
    
    fr: {
        // Navigation
        nav_home: "Accueil",
        nav_education: "Formation",
        nav_portfolio: "Portfolio", 
        nav_competence: "Compétences",
        nav_contact: "Contact",
        
        // Hero section
        hero_title: "Salut ! C'est <span>Bistrel</span>",
        hero_subtitle: "Expérience comme un <span> </span>",
        hero_description: "Étudiant de 21 ans en troisième année à ALGOSUP, profondément immergé dans des études avancées axées sur la technologie et le développement logiciel. Avec un vif intérêt pour les applications théoriques et pratiques, je construis une base solide en programmation, ingénierie logicielle et résolution créative de problèmes. Mon expérience à ALGOSUP m'a permis de travailler sur des projets de pointe, notamment la conception FPGA, les systèmes de réalité augmentée et le développement de jeux, démontrant ma passion pour l'innovation et les solutions technologiques. Je repousse constamment les limites pour perfectionner mes compétences et me préparer à une carrière dynamique dans la tech.",
        
        // Buttons
        btn_hire: "Embaucher",
        btn_contact: "Contact",
        
        // Section headings
        section_education: "Formation",
        section_portfolio: "Portfolio",
        section_competence: "Compétences", 
        section_contact: "Contactez <span>Moi</span>",
        
        // Skills section
        technical_skills: "Compétences Techniques",
        professional_skills: "Compétences Professionnelles",
        
        // Contact form
        form_full_name: "Nom complet",
        form_email: "Email",
        form_phone: "Numéro de téléphone",
        form_subject: "Sujet",
        form_message: "Votre message",
        form_send: "Envoyer le message",
        form_sending: "Envoi en cours...",
        form_success: "✅ Message envoyé avec succès ! Je vous répondrai bientôt.",
        form_error: "❌ Échec de l'envoi du message. Veuillez réessayer.",
        
        // Portfolio projects
        project_locindoor_title: "LOCINDOOR",
        project_locindoor_role: "Rôle : <span>Développeur, Chef de Projet, Lead Technique, Program Manager, Assurance Qualité</span>",
        project_locindoor_description: "En tant que développeur et créateur unique de LOCINDOOR, j'ai géré indépendamment tous les aspects du projet—de la conception initiale au déploiement, en passant par le codage et les tests. Je développe le système de navigation en réalité augmentée, ai intégré la technologie Bluetooth beacon, afin d'assurer la fiabilité et l'expérience utilisateur de l'application. Ce projet démontre ma capacité à prendre entièrement la responsabilité, résoudre des défis techniques complexes et livrer une solution innovante entièrement par moi-même.",
        
        project_greencity_title: "GREEN CITY",
        project_greencity_role: "Rôle : <span>Chef de Projet</span>",
        project_greencity_description: "J'ai eu l'opportunité d'être le chef de projet du projet Green City. J'ai géré le développement de Green City en planifiant, distribuant les tâches et facilitant la communication au sein de l'équipe. J'ai veillé à ce que chaque fonctionnalité soit alignée avec les objectifs éducatifs et environnementaux du projet, tout en respectant les délais et en maintenant une expérience de jeu de haute qualité.",
        
        project_africawedding_title: "Mariage Africain",
        project_africawedding_role: "Rôle : <span>Développeur Frontend & Backend</span>",
        project_africawedding_description: "J'ai conçu et développé l'ensemble du site web, des visuels frontend à l'implémentation backend. J'ai intégré des éléments graphiques africains traditionnels pour créer une expérience utilisateur authentique. Mon travail a abouti à une invitation de mariage numérique moderne et personnalisée.",
        
        project_virtualprocessor_title: "Processeur Virtuel",
        project_virtualprocessor_role: "Rôle : <span>Développeur Logiciel</span>",
        project_virtualprocessor_description: "En tant que développeur logiciel, j'ai conçu et implémenté un processeur virtuel et son interpréteur en C, en prenant référence de l'Architecture LC3. J'ai géré la modélisation de l'architecture, le code d'exécution des instructions et la documentation technique pour aider à l'exécution du programme, tout en assurant la portabilité du projet.",
        
        project_quickestpath_title: "Chemin le Plus Rapide",
        project_quickestpath_role: "Rôle : <span>Développeur Logiciel</span>",
        project_quickestpath_description: "En tant que développeur, j'étais responsable de vérifier que le graphe—contenant 24 millions de nœuds—était un vrai Graphe Acyclique Dirigé (DAG) avant d'implémenter tout algorithme de recherche de chemin. J'ai ensuite optimisé l'algorithme principal pour calculer le chemin le plus rapide entre deux points de repère en moins d'une seconde, combinant la recherche bidirectionnelle avec Dijkstra. Mon travail a assuré à la fois l'intégrité structurelle des données et les hautes performances de la solution.",
        
        project_webfpga_title: "Web FPGA",
        project_webfpga_role: "Rôle : <span>Program Manager</span>",
        project_webfpga_description: "En tant que Program Manager, j'étais responsable de la création du document de spécification fonctionnelle du projet en travaillant étroitement avec le client pour comprendre et définir leurs besoins. J'ai facilité les discussions, recueilli les exigences et les ai traduites en directives techniques claires pour l'équipe. Mon rôle a assuré que le produit final soit aligné avec les attentes du client et que tous les efforts de développement soient focalisés sur la livraison de valeur réelle.",
        
        // Links
        view_github: "Voir sur GitHub",
        view_website: "Voir le site web"
    }
};

// Translation functionality
class TranslationManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('preferred-language') || 'en';
        this.init();
    }
    
    init() {
        // Update the language toggle button
        this.updateLanguageButton();
        
        // Apply current language
        this.applyTranslation(this.currentLanguage);
        
        // Add event listener to language toggle
        const languageToggle = document.getElementById('language-toggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', () => this.toggleLanguage());
        }
    }
    
    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'en' ? 'fr' : 'en';
        localStorage.setItem('preferred-language', this.currentLanguage);
        this.applyTranslation(this.currentLanguage);
        this.updateLanguageButton();
    }
    
    updateLanguageButton() {
        const languageToggle = document.getElementById('language-toggle');
        if (languageToggle) {
            // Show current language flag/indicator
            if (this.currentLanguage === 'en') {
                languageToggle.classList.remove('bx-globe');
                languageToggle.classList.add('bx-world');
                languageToggle.title = "Switch to French";
            } else {
                languageToggle.classList.remove('bx-world'); 
                languageToggle.classList.add('bx-globe');
                languageToggle.title = "Passer à l'anglais";
            }
        }
    }
    
    applyTranslation(language) {
        const elements = document.querySelectorAll('[data-translate]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[language] && translations[language][key]) {
                element.innerHTML = translations[language][key];
            }
        });
        
        // Handle placeholder translations
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[language] && translations[language][key]) {
                element.placeholder = translations[language][key];
            }
        });
        
        // Update text animations for different languages
        this.updateTextAnimation(language);
    }
    
    updateTextAnimation(language) {
        const textAnimationSpan = document.querySelector('.text-animation span');
        if (textAnimationSpan) {
            // Update CSS animations based on language
            if (language === 'fr') {
                // Update CSS keyframes for French
                this.updateAnimationKeyframes('fr');
            } else {
                // Update CSS keyframes for English
                this.updateAnimationKeyframes('en');
            }
        }
    }
    
    updateAnimationKeyframes(language) {
        // Create a dynamic style element for animations
        let animationStyle = document.getElementById('dynamic-animation');
        if (!animationStyle) {
            animationStyle = document.createElement('style');
            animationStyle.id = 'dynamic-animation';
            document.head.appendChild(animationStyle);
        }
        
        const animationCSS = language === 'fr' ? `
            @keyframes words {
                0%, 20% { content: " Architecte Logiciel"; }
                21%, 40% { content: " Ingénieur Logiciel"; }
                41%, 60% { content: " Chef de Projet"; }
                61%, 80% { content: " Designer UX/UI"; }
                81%, 100% { content: " Program Manager"; }
                101%, 120% { content: " Chef de Projet"; }
                121%, 140% { content: " Lead Technique"; }
                141%, 160% { content: " Program Manager"; }
            }
        ` : `
            @keyframes words {
                0%, 20% { content: " Software Architect"; }
                21%, 40% { content: " Software Engineer"; }
                41%, 60% { content: " Project Manager"; }
                61%, 80% { content: " UX / UI Designer"; }
                81%, 100% { content: " Program Manager"; }
                101%, 120% { content: " Project Management"; }
                121%, 140% { content: " Technical Lead"; }
                141%, 160% { content: " Program Management"; }
            }
        `;
        
        animationStyle.textContent = animationCSS;
    }
}

// Initialize translation manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TranslationManager();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TranslationManager, translations };
} 
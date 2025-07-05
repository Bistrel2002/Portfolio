// Background Animations System
class BackgroundAnimations {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.currentAnimation = null;
        this.animationFrame = null;
        
        this.init();
    }

    init() {
        // Create canvas
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'background-animation';
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
        `;
        document.body.insertBefore(this.canvas, document.body.firstChild);
        
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        
        // Event listeners
        window.addEventListener('resize', () => this.resizeCanvas());
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    // Animation A - Particles connectés (style Matrix)
    startMatrixParticles() {
        this.stop();
        this.currentAnimation = 'matrix';
        this.particles = [];
        
        // Create particles
        for (let i = 0; i < 80; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }
        
        this.animateMatrix();
    }

    animateMatrix() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles.forEach((particle, i) => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = '#22c55e';
            this.ctx.fill();
            
            // Draw connections
            this.particles.slice(i + 1).forEach(other => {
                const dx = particle.x - other.x;
                const dy = particle.y - other.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(other.x, other.y);
                    this.ctx.strokeStyle = `rgba(34, 197, 94, ${1 - distance / 120})`;
                    this.ctx.stroke();
                }
            });
            
            // Mouse interaction
            const mouseDistance = Math.sqrt(
                (particle.x - this.mouse.x) ** 2 + (particle.y - this.mouse.y) ** 2
            );
            if (mouseDistance < 100) {
                particle.vx += (this.mouse.x - particle.x) * 0.00002;
                particle.vy += (this.mouse.y - particle.y) * 0.00002;
            }
        });
        
        this.animationFrame = requestAnimationFrame(() => this.animateMatrix());
    }

    // Animation B - Formes géométriques flottantes
    startFloatingShapes() {
        this.stop();
        this.currentAnimation = 'shapes';
        this.particles = [];
        
        // Create shapes
        for (let i = 0; i < 15; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 40 + 20,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.02,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                shape: Math.random() > 0.5 ? 'triangle' : 'circle',
                opacity: Math.random() * 0.3 + 0.1
            });
        }
        
        this.animateShapes();
    }

    animateShapes() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(shape => {
            // Update position
            shape.x += shape.vx;
            shape.y += shape.vy;
            shape.rotation += shape.rotationSpeed;
            
            // Wrap around edges
            if (shape.x < -shape.size) shape.x = this.canvas.width + shape.size;
            if (shape.x > this.canvas.width + shape.size) shape.x = -shape.size;
            if (shape.y < -shape.size) shape.y = this.canvas.height + shape.size;
            if (shape.y > this.canvas.height + shape.size) shape.y = -shape.size;
            
            this.ctx.save();
            this.ctx.translate(shape.x, shape.y);
            this.ctx.rotate(shape.rotation);
            this.ctx.globalAlpha = shape.opacity;
            
            if (shape.shape === 'triangle') {
                this.ctx.beginPath();
                this.ctx.moveTo(0, -shape.size / 2);
                this.ctx.lineTo(-shape.size / 2, shape.size / 2);
                this.ctx.lineTo(shape.size / 2, shape.size / 2);
                this.ctx.closePath();
                this.ctx.strokeStyle = '#8b5cf6';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
            } else {
                this.ctx.beginPath();
                this.ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
                this.ctx.strokeStyle = '#22c55e';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
            }
            
            this.ctx.restore();
        });
        
        this.animationFrame = requestAnimationFrame(() => this.animateShapes());
    }

    // Animation C - Effet de réseau neuronal
    startNeuralNetwork() {
        this.stop();
        this.currentAnimation = 'neural';
        this.particles = [];
        
        // Create neural nodes
        for (let i = 0; i < 60; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: Math.random() * 0.02 + 0.01
            });
        }
        
        this.animateNeural();
    }

    animateNeural() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((node, i) => {
            // Update position
            node.x += node.vx;
            node.y += node.vy;
            node.pulse += node.pulseSpeed;
            
            // Bounce off edges
            if (node.x < 0 || node.x > this.canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > this.canvas.height) node.vy *= -1;
            
            // Draw pulsing node
            const pulseSize = 3 + Math.sin(node.pulse) * 2;
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(139, 92, 246, ${0.6 + Math.sin(node.pulse) * 0.4})`;
            this.ctx.fill();
            
            // Draw neural connections
            this.particles.slice(i + 1).forEach(other => {
                const dx = node.x - other.x;
                const dy = node.y - other.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    const pulse = (Math.sin(node.pulse) + Math.sin(other.pulse)) / 2;
                    this.ctx.beginPath();
                    this.ctx.moveTo(node.x, node.y);
                    this.ctx.lineTo(other.x, other.y);
                    this.ctx.strokeStyle = `rgba(34, 197, 94, ${(1 - distance / 150) * (0.3 + pulse * 0.3)})`;
                    this.ctx.lineWidth = 1 + pulse;
                    this.ctx.stroke();
                }
            });
        });
        
        this.animationFrame = requestAnimationFrame(() => this.animateNeural());
    }

    // Animation D - Particules interactives gaming
    startGamingParticles() {
        this.stop();
        this.currentAnimation = 'gaming';
        this.particles = [];
        this.trails = [];
        
        // Create gaming particles
        for (let i = 0; i < 100; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                life: 1,
                size: Math.random() * 3 + 1,
                hue: Math.random() * 60 + 320 // Purple to pink range
            });
        }
        
        this.animateGaming();
    }

    animateGaming() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Mouse trail effect
        if (this.mouse.x > 0 && this.mouse.y > 0) {
            for (let i = 0; i < 3; i++) {
                this.trails.push({
                    x: this.mouse.x + (Math.random() - 0.5) * 20,
                    y: this.mouse.y + (Math.random() - 0.5) * 20,
                    vx: (Math.random() - 0.5) * 4,
                    vy: (Math.random() - 0.5) * 4,
                    life: 1,
                    size: Math.random() * 5 + 2
                });
            }
        }
        
        // Update and draw trails
        this.trails = this.trails.filter(trail => {
            trail.x += trail.vx;
            trail.y += trail.vy;
            trail.life -= 0.02;
            trail.vx *= 0.99;
            trail.vy *= 0.99;
            
            if (trail.life > 0) {
                this.ctx.beginPath();
                this.ctx.arc(trail.x, trail.y, trail.size * trail.life, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(255, 100, 255, ${trail.life})`;
                this.ctx.fill();
                return true;
            }
            return false;
        });
        
        // Update and draw particles
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            // Mouse attraction
            const mouseDistance = Math.sqrt(
                (particle.x - this.mouse.x) ** 2 + (particle.y - this.mouse.y) ** 2
            );
            if (mouseDistance < 150) {
                const force = (150 - mouseDistance) / 150;
                particle.vx += (this.mouse.x - particle.x) * force * 0.0001;
                particle.vy += (this.mouse.y - particle.y) * force * 0.0001;
            }
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `hsl(${particle.hue}, 70%, 60%)`;
            this.ctx.fill();
        });
        
        this.animationFrame = requestAnimationFrame(() => this.animateGaming());
    }

    stop() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null;
        }
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        this.currentAnimation = null;
    }

    destroy() {
        this.stop();
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}

// Animation Controller
class AnimationController {
    constructor() {
        this.animations = new BackgroundAnimations();
        this.createControls();
    }

    createControls() {
        // Create control panel
        const controls = document.createElement('div');
        controls.id = 'animation-controls';
        controls.style.cssText = `
            position: fixed;
            top: 120px;
            right: 20px;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            padding: 15px;
            z-index: 1000;
            border: 2px solid #22c55e;
        `;
        
        controls.innerHTML = `
            <h3 style="color: #22c55e; margin: 0 0 10px 0; font-size: 14px;">🎨 Animations Background</h3>
            <button class="anim-btn" data-animation="matrix">🔗 Matrix Particles</button>
            <button class="anim-btn" data-animation="shapes">🔺 Formes Flottantes</button>
            <button class="anim-btn" data-animation="neural">🧠 Réseau Neuronal</button>
            <button class="anim-btn" data-animation="gaming">⚡ Gaming Particles</button>
            <button class="anim-btn" data-animation="stop">❌ Arrêter</button>
        `;
        
        document.body.appendChild(controls);
        
        // Style buttons
        const style = document.createElement('style');
        style.textContent = `
            #animation-controls {
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            }
            .anim-btn {
                display: block;
                width: 100%;
                margin: 5px 0;
                padding: 8px 12px;
                background: transparent;
                border: 1px solid #8b5cf6;
                color: white;
                border-radius: 5px;
                cursor: pointer;
                font-size: 12px;
                transition: all 0.3s ease;
            }
            .anim-btn:hover {
                background: #8b5cf6;
                transform: scale(1.05);
                box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
            }
            .anim-btn.active {
                background: #22c55e;
                border-color: #22c55e;
                box-shadow: 0 0 15px rgba(34, 197, 94, 0.5);
            }
            
            /* Responsive design for mobile */
            @media (max-width: 768px) {
                #animation-controls {
                    top: 80px;
                    right: 10px;
                    padding: 10px;
                    max-width: 180px;
                }
                #animation-controls h3 {
                    font-size: 12px !important;
                }
                .anim-btn {
                    padding: 6px 8px;
                    font-size: 11px;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Add event listeners
        controls.addEventListener('click', (e) => {
            if (e.target.classList.contains('anim-btn')) {
                // Remove active class from all buttons
                controls.querySelectorAll('.anim-btn').forEach(btn => btn.classList.remove('active'));
                
                const animation = e.target.dataset.animation;
                switch (animation) {
                    case 'matrix':
                        this.animations.startMatrixParticles();
                        e.target.classList.add('active');
                        break;
                    case 'shapes':
                        this.animations.startFloatingShapes();
                        e.target.classList.add('active');
                        break;
                    case 'neural':
                        this.animations.startNeuralNetwork();
                        e.target.classList.add('active');
                        break;
                    case 'gaming':
                        this.animations.startGamingParticles();
                        e.target.classList.add('active');
                        break;
                    case 'stop':
                        this.animations.stop();
                        break;
                }
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.animationController = new AnimationController();
    
    // Start with matrix animation by default (subtle)
    setTimeout(() => {
        window.animationController.animations.startMatrixParticles();
        const matrixBtn = document.querySelector('[data-animation="matrix"]');
        if (matrixBtn) matrixBtn.classList.add('active');
    }, 2000); // Delay to let page load smoothly
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BackgroundAnimations, AnimationController };
} 
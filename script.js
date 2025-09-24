// Animaciones al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de escritura automática
    const texts = ['gaming económico', 'setup profesional', 'ahorro inteligente'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    
    function typeWriter() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
        
        document.querySelector('.typing-effect').textContent = letter;
        
        if (letter.length === currentText.length) {
            setTimeout(() => {
                count++;
                index = 0;
                setTimeout(typeWriter, 1000);
            }, 2000);
        } else {
            setTimeout(typeWriter, 100);
        }
    }
    
    typeWriter();
    
    // Animación de contadores
    const counters = document.querySelectorAll('[data-count]');
    const speed = 200;
    
    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const inc = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target;
            }
        });
    };
    
    // Activar animaciones al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                if (entry.target.classList.contains('stats-grid')) {
                    animateCounters();
                }
            }
        });
    });
    
    document.querySelectorAll('.stat-card, .product-card, .game-card').forEach(el => {
        observer.observe(el);
    });
    
    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

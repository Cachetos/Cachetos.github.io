// Automatizaciones SILENCIOSAS que funcionan pero no se muestran
function initAutomatizacionesSilenciosas() {
    // Contador de visitas (invisible para el usuario)
    let visitas = localStorage.getItem('visitas') || 0;
    visitas++;
    localStorage.setItem('visitas', visitas);
    
    // Rotador de precios automático (sin anunciarlo)
    function rotarPrecios() {
        const elementosPrecio = document.querySelectorAll('.live-price');
        elementosPrecio.forEach(precio => {
            const precioActual = parseFloat(precio.textContent.replace('€', ''));
            const variacion = (Math.random() * 0.1) - 0.05; // ±5%
            const nuevoPrecio = precioActual * (1 + variacion);
            precio.textContent = `€${nuevoPrecio.toFixed(2)}`;
        });
    }
    
    // Actualizar cada 30 minutos silenciosamente
    setInterval(rotarPrecios, 30 * 60 * 1000);
    
    // Efecto typing discreto
    const textos = ['gaming económico', 'calidad premium', 'precios actualizados', 'reviews honestas'];
    let textoIndex = 0;
    let charIndex = 0;
    
    function typeEffect() {
        if (textoIndex === textos.length) textoIndex = 0;
        
        const textoActual = textos[textoIndex];
        const textoParcial = textoActual.slice(0, charIndex + 1);
        
        document.querySelector('.typing-effect').textContent = textoParcial;
        charIndex++;
        
        if (charIndex === textoActual.length) {
            setTimeout(() => {
                textoIndex++;
                charIndex = 0;
                setTimeout(typeEffect, 1000);
            }, 2000);
        } else {
            setTimeout(typeEffect, 100);
        }
    }
    
    typeEffect();
}

// Iniciar automatizaciones cuando la página cargue
document.addEventListener('DOMContentLoaded', initAutomatizacionesSilenciosas);

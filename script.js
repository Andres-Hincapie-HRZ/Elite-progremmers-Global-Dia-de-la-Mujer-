const card = document.getElementById('card');
const btnFlip = document.getElementById('btnFlip');
const btnBack = document.getElementById('btnBack');
const bgAnimation = document.querySelector('.background-animation');

// Voltear tarjeta
btnFlip.addEventListener('click', () => {
    card.classList.add('flipped');
});

btnBack.addEventListener('click', () => {
    card.classList.remove('flipped');
});

// Crear elementos cayendo (rosas y corazones)
function createFallingElement() {
    const element = document.createElement('div');
    const isRose = Math.random() > 0.5;
    
    element.textContent = isRose ? '🌹' : (Math.random() > 0.5 ? '💜' : '💗');
    element.style.position = 'absolute';
    element.style.left = Math.random() * 100 + '%';
    element.style.top = '-50px';
    element.style.fontSize = (Math.random() * 10 + 20) + 'px';
    element.style.opacity = '0';
    element.style.transition = 'none';
    element.style.pointerEvents = 'none';
    
    bgAnimation.appendChild(element);
    
    // Animar caída
    setTimeout(() => {
        element.style.transition = `all ${Math.random() * 3 + 4}s linear`;
        element.style.top = '110vh';
        element.style.opacity = '1';
        element.style.transform = `translateX(${(Math.random() - 0.5) * 200}px) rotate(${Math.random() * 360}deg)`;
    }, 10);
    
    // Remover después de la animación
    setTimeout(() => {
        element.remove();
    }, 8000);
}

// Generar elementos cayendo continuamente
setInterval(createFallingElement, 600);

// Generar algunos elementos iniciales
for (let i = 0; i < 8; i++) {
    setTimeout(createFallingElement, i * 200);
}

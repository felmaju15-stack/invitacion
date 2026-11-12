AOS.init({ duration: 1000, once: true });

const btnIngresar = document.getElementById('btn-ingresar');
const overlay = document.getElementById('overlay');
const musica = document.getElementById('musica');
const btnToggle = document.getElementById('btn-musica-toggle');

btnIngresar.addEventListener('click', () => {
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        musica.play().catch(e => console.log("Audio bloqueado"));
    }, 800);
});

btnToggle.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        btnToggle.innerText = '||';
    } else {
        musica.pause();
        btnToggle.innerText = '▶';
    }
});

function toggleRegalos() {
    const div = document.getElementById('datos-banco');
    div.classList.toggle('hidden');
}

const targetDate = new Date('December 4, 2026 21:30:00').getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    const countdown = document.getElementById('countdown');
    if (countdown) {
        countdown.innerHTML = `
            <div class="countdown-item"><span>${d}</span><div class="countdown-label">Días</div></div>
            <div class="countdown-item"><span>${h}</span><div class="countdown-label">Horas</div></div>
            <div class="countdown-item"><span>${m}</span><div class="countdown-label">Mins</div></div>
            <div class="countdown-item"><span>${s}</span><div class="countdown-label">Segs</div></div>
        `;
    }
}, 1000);

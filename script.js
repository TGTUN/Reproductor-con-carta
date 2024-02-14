document.getElementById("envelope").addEventListener("click", function() {
  this.classList.add("open");
  document.getElementById("heart").style.display = "none";
  document.getElementById("message").classList.remove("hidden");
});

// Script para generar corazones en posiciones aleatorias
const createHeart1 = () => {
  const heart1 = document.createElement('div');
  heart1.innerHTML = '❤️';
  heart1.classList.add('heart1');
  heart1.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
  heart1.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duración de la animación aleatoria
  document.body.appendChild(heart1);

  setTimeout(() => {
    heart1.remove();
  }, 5000); // Remover el corazón después de 5 segundos
};

setInterval(createHeart1, 300); // Generar corazones cada 0.3 segundos


// Echo por prograae para mas repositorios https://github.com/TGTUN?tab=repositories 
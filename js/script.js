// Menu untuk layar kecil
const tombolMenu = document.querySelector('.burger');
const menu = document.getElementById('menu');

if (tombolMenu && menu) {
  tombolMenu.addEventListener('click', function () {
    const terbuka = menu.classList.toggle('buka');
    tombolMenu.setAttribute('aria-expanded', terbuka);
  });
}

// Bar skill terisi saat terlihat di layar
const bars = document.querySelectorAll('.track span');

function isiBar(el) {
  el.style.width = el.dataset.level + '%';
}

if ('IntersectionObserver' in window) {
  const pengamat = new IntersectionObserver(function (daftar) {
    daftar.forEach(function (item) {
      if (item.isIntersecting) {
        isiBar(item.target);
        pengamat.unobserve(item.target);
      }
    });
  }, { threshold: 0.4 });
  bars.forEach(function (b) { pengamat.observe(b); });
} else {
  bars.forEach(isiBar);
}

// Tahun otomatis di footer
const tahun = document.getElementById('tahun');
if (tahun) tahun.textContent = new Date().getFullYear();

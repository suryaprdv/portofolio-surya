// Mengambil elemen tombol menu dan daftar navigasi
const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('.nav-list');

// Menambahkan event listener untuk toggle menu saat tombol diklik
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

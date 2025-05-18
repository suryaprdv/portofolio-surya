// JavaScript untuk Tombol Hamburger
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
});

<script>
  const toggleBtn = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');

  toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
</script>

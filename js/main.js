const toggleBtn = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__list-item');

toggleBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
  toggleBtn.classList.toggle('active');
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    toggleBtn.classList.remove('active');
    navList.classList.remove('active');
  });
});
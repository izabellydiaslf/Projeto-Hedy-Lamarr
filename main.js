document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
const mainTitle = document.querySelector('.main-title');

mainTitle.addEventListener('mouseenter', function() {
  banner.classList.add('updated');
});

mainTitle.addEventListener('mouseleave', function() {
  banner.classList.remove('updated');
});
  });
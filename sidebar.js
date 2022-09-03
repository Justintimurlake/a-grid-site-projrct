export default function sideBar() {
  const openMenu = document.querySelector('.btn-open');
  const closeMenu = document.querySelector('.btn-close');
  const sideBar = document.querySelector('.sidebar-container');
  const overlay = document.querySelector('.sidebar-overlay');
  const body = document.querySelector('body');

  openMenu.addEventListener('click', () => {
    sideBar.style.display = 'flex';
    overlay.style.display = 'block';
    body.style.overflow = 'hidden';
  });
  closeMenu.addEventListener('click', () => {
    sideBar.style.display = 'none';
    overlay.style.display = 'none';
    body.style.overflow = 'scroll';
  });

  window.addEventListener('click', (e) => {
    const target = e.target;
    if (target === overlay) {
      sideBar.style.display = 'none';
      overlay.style.display = 'none';
      body.style.overflow = 'scroll';
    }
  });
}

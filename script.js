document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('navbar');
  toggle.addEventListener('click', () => nav.classList.toggle('open'));

  // Scroll-triggered fade
  const elements = document.querySelectorAll('.fade-on-scroll');
  const isVisible = el => {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight - 50;
  };
  const onScroll = () => elements.forEach(el => {
    if (isVisible(el)) el.classList.add('visible');
  });
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Contact form (in contact.html)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert(`Thanks, ${form.name.value}! We’ll get back to you soon.`);
      form.reset();
    });
  }
});

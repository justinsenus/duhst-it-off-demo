const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
const bookingDialog = document.querySelector('#booking-dialog');
const bookingForm = document.querySelector('#booking-form');
const serviceSelect = document.querySelector('#request-service');
const formStatus = document.querySelector('#form-status');

function openBooking(service = '') {
  if (serviceSelect) serviceSelect.value = service;
  if (formStatus) formStatus.textContent = '';
  if (bookingDialog?.showModal) bookingDialog.showModal();
}

document.querySelectorAll('[data-booking-open]').forEach((button) => {
  button.addEventListener('click', () => openBooking());
});

document.querySelectorAll('[data-book-service]').forEach((button) => {
  button.addEventListener('click', () => openBooking(button.dataset.bookService || ''));
});

document.querySelector('[data-booking-close]')?.addEventListener('click', () => bookingDialog?.close());

bookingDialog?.addEventListener('click', (event) => {
  if (event.target === bookingDialog) bookingDialog.close();
});

bookingForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!bookingForm.reportValidity()) return;
  formStatus.textContent = 'Thanks! This preview does not send or store requests yet. Booking details can be connected after approval.';
});

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  siteNav?.classList.toggle('is-open', !isOpen);
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
    siteNav.classList.remove('is-open');
    siteNav.querySelectorAll('a').forEach((item) => item.classList.remove('is-current'));
    link.classList.add('is-current');
  });
});

const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  const matchingLink = siteNav?.querySelector(`a[href="#${visible.target.id}"]`);
  if (!matchingLink) return;
  siteNav.querySelectorAll('a').forEach((item) => item.classList.remove('is-current'));
  matchingLink.classList.add('is-current');
}, { rootMargin: '-25% 0px -65% 0px', threshold: [0, 0.15, 0.4] });

document.querySelectorAll('main > section[id], footer[id]').forEach((section) => sectionObserver.observe(section));

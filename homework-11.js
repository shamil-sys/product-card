const emailForm = document.querySelector(".footer__subscribe-form");
emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailForm.querySelector('[id="email"]').value;
  console.log({
    email: email,
  });
});

  const openBtn = document.querySelector('.open_registration');
  const closeBtn = document.querySelector('.modal_close');
  const overlay = document.querySelector('.overlay');
  const modal = document.getElementById('registration-modal');
  const form = document.getElementById('registration-form');
  const passwordInput = document.querySelector('input[name="password"]');
  const repeatPasswordInput = document.querySelector('input[name="repeatPassword"]');
  const errorSpan = document.createElement('span');
  errorSpan.id = 'password-error';
  errorSpan.textContent = 'Пароли не совпадают';

  function openModal() {
    modal.classList.add('active');
    overlay.classList.add('active');
  }

  function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    if (document.getElementById('password-error')) {
      document.getElementById('password-error').remove();
    }
  }

  if (openBtn) {
    openBtn.addEventListener('click', openModal);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  if (overlay) {
    overlay.addEventListener('click', closeModal);
  }

  // Проверка совпадения паролей в реальном времени
  function validatePasswords() {
    const errorContainer = document.getElementById('password-error');
    if (passwordInput.value !== repeatPasswordInput.value) {
      if (!errorContainer) {
        form.appendChild(errorSpan);
      }
      return false; 
    } else {
      const existingError = document.getElementById('password-error');
      if (existingError) {
        existingError.remove();
      }
      return true;
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    if (!validatePasswords()) {
      return; 
    }

    alert('Регистрация прошла успешно! (данные не отправлены)');
    closeModal();
  });

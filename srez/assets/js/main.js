const makeRequestModal = document.querySelector('#make_request');
const triggers = document.querySelectorAll('.accordion__trigger');

triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        // Получаем текущий контент аккордиона и иконку
        const accordionContent = trigger.nextElementSibling;
        const icon = trigger.querySelector('.accordion__icon');

        // Проверяем, открыт ли контент
        if (accordionContent.style.display === 'block') {
            accordionContent.style.display = 'none'; // Скрыть контент
            icon.innerHTML = '&#43;'; // Меняем иконку на плюс
        } else {
            accordionContent.style.display = 'block'; // Показать контент
            icon.innerHTML = '&#8722;'; // Меняем иконку на минус
        }
    });
});
  
    // 2) Модальное окно: открывается и закрывается при нажатии, активируется при пересечении блока
    const modal = document.getElementById('make_request');
    const openModalButton = document.querySelector('.card button'); // Кнопка "Записаться" в блоке "карта"
    const closeModalButton = modal.querySelector('.close');
  
    openModalButton.addEventListener('click', () => {
      modal.showModal();
    });
  
    closeModalButton.addEventListener('click', () => {
      modal.close();
    });
  
    // Активирует модальное окно при пересечении блока "Наши услуги"
    const servicesSection = document.querySelector('.services');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          modal.showModal();
        }
      });
    }, { threshold: 1.0 });
    
    observer.observe(servicesSection);
  
    // 3) Вложенные ссылки в шапке открываются при наведении
    document.querySelectorAll('.link_expand').forEach(linkExpand => {
      const expandContent = linkExpand.querySelector('.link_expand__content');
  
      linkExpand.addEventListener('mouseenter', () => {
        expandContent.style.display = 'block';
      });
  
      linkExpand.addEventListener('mouseleave', () => {
        expandContent.style.display = 'none';
      });
    });
  
    // 4) Форма записи на фотосессию
    const requestForm = modal.querySelector('.make_request_form');
  
    requestForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Остановить отправку формы
      const email = requestForm.email.value;
  
      // Валидация на пустоту
      if (!email) {
        alert('Пожалуйста, введите ваш E-mail!'); // Сообщение о необходимости ввода email
        return;
      }
  
      // Проверка на корректность email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Регулярное выражение для проверки email
      if (!emailPattern.test(email)) {
        alert('Введите корректный E-mail!'); // Сообщение о некорректном email
        return;
      }
  
      // Ваш адрес для fetch запроса
      fetch('your-endpoint-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка в сети');
        }
        return response.json();
      })
      .then(data => {
        alert('Заявка успешно отправлена!'); // Сообщение об успехе
        requestForm.reset(); // Сброс формы
        modal.close(); // Закрыть модальное окно
      })
      .catch(err => {
        alert('Ошибка: ' + err.message);
      });
    });
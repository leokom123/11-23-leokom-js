const makeRequestModal = document.querySelector('#make_request'); 
const triggers = document.querySelectorAll('.accordion__trigger'); 
const accordions = document.querySelectorAll('.accordion'); 
accordions.forEach(accordion => { 
    const trigger = accordion.querySelector('.accordion__trigger'); 
    trigger.addEventListener('click', function () { 
        accordion.classList.toggle('open'); 
    }); 
}); 
function openModal() { 
    makeRequestModal.classList.add('open'); 
  } 
  function closeModal() { 
    makeRequestModal.classList.remove('open'); 
  }

    const modal = document.getElementById('make_request'); 
    const openModalButton = document.querySelector('.card button');  
    const closeModalButton = modal.querySelector('.close'); 
    openModalButton.addEventListener('click', () => { 
      modal.showModal(); 
    }); 
   
    closeModalButton.addEventListener('click', () => { 
      modal.close(); 
    }); 
 
    const servicesSection = document.querySelector('.services'); 
    const observer = new IntersectionObserver(entries => { 
      entries.forEach(entry => { 
        if (entry.isIntersecting) { 
          modal.showModal(); 
        } 
      }); 
    }, { threshold: 1.0 }); 
     
    observer.observe(servicesSection); 
 
    document.querySelectorAll('.link_expand').forEach(linkExpand => { 
      const expandContent = linkExpand.querySelector('.link_expand__content'); 
   
      linkExpand.addEventListener('mouseenter', () => { 
        expandContent.style.display = 'block'; 
      }); 
   
      linkExpand.addEventListener('mouseleave', () => { 
        expandContent.style.display = 'none'; 
      }); 
    }); 
   
    const requestForm = modal.querySelector('.make_request_form'); 
   
    requestForm.addEventListener('submit', function(e) { 
      e.preventDefault();  
      const email = requestForm.email.value; 
   
       
      if (!email) { 
        alert('Пожалуйста, напишите ваш E-mail!');  
        return; 
      } 
   
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
      if (!emailPattern.test(email)) { 
        alert('напишите корректный E-mail!'); 
        return; 
      } 
   
      fetch('your-endpoint-url', { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json' 
        }, 
        body: JSON.stringify({ email }) 
      }) 
      .then(response => { 
        if (!response.ok) { 
          throw new Error('Ошибка'); 
        } 
        return response.json(); 
      }) 
      .then(data => { 
        alert('Заявка отправлена!'); 
        requestForm.reset(); 
        modal.close(); 
      }) 
      .catch(err => { 
        alert('Ошибка: ' + err.message); 
      }); 
    });
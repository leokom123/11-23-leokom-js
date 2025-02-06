document.addEventListener('DOMContentLoaded', function() {
    const sliderContent = document.querySelector('.slider_content');
    const sliderItems = document.querySelectorAll('.slider_item');
    const sliderDots = document.querySelectorAll('.slider_dot');
    let currentIndex = 0;
  
    function updateSlider(index) {
      sliderContent.style.transform = `translateX(-${index * 100}%)`;
      sliderItems.forEach(item => item.classList.remove('active'));
      sliderDots.forEach(dot => dot.classList.remove('active'));
      sliderItems[index].classList.add('active');
      sliderDots[index].classList.add('active');
    }
  
    document.querySelector('.arrow_left').addEventListener('click', function() {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : sliderItems.length - 1;
      updateSlider(currentIndex);
    });
  
    document.querySelector('.arrow_right').addEventListener('click', function() {
      currentIndex = (currentIndex < sliderItems.length - 1) ? currentIndex + 1 : 0;
      updateSlider(currentIndex);
    });
  
    sliderDots.forEach(dot => {
      dot.addEventListener('click', function() {
        currentIndex = parseInt(this.getAttribute('data-index'));
        updateSlider(currentIndex);
      });
    });
  
    updateSlider(currentIndex);
  });
  
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll('.box');
  const totalDisplay = document.querySelector('.total');
  const deliveryDisplay = document.querySelector('.delivery');

  const pricing = { 1:10, 2:18, 3:24 };

  boxes.forEach(box => {
    box.addEventListener('click', () => {
      boxes.forEach(b => {
        b.classList.remove('active');
        const dyn = b.querySelector('.dynamic-options');
        if (dyn) dyn.style.display = 'none';
      });

      box.classList.add('active');
      const dyn = box.querySelector('.dynamic-options');
      if (dyn) dyn.style.display = 'block';

      const radio = box.querySelector("input[type='radio']");
      if (radio) radio.checked = true;

      const unit = box.getAttribute('data-unit');
      if (unit && pricing[unit] != null) {
        totalDisplay.textContent = `Total : $${pricing[unit].toFixed(2)} USD`;
        deliveryDisplay.textContent = 'Free Delivery';
      }
    });
  });
});

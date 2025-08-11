document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.data');

  const observer = new IntersectionObserver((entries) => { //entries bisa diganti jadi teks apa saja
    entries.forEach(entry => {                            //dan entry
      if (entry.isIntersecting) {
        
        entry.target.classList.add('show');
      } else {
     
        entry.target.classList.remove('show');
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
});

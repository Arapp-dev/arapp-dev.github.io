document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.data');

  const observer = new IntersectionObserver((entries) => { //entries bisa diganti jadi teks apa saja
    entries.forEach(entry => {                            //dan entry
      if (entry.isIntersecting) {
        
        entry.target.classList.add('show');
       }  //else {
     
      //    entry.target.classList.remove('show');
      // }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));

//  const elements2 = document.querySelectorAll('.ha');

//   const observer2 = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('show2');
//       }
//     });
//   }, {
//     threshold: 0.2
//   });

//   elements2.forEach(el => observer2.observe(el));
});

const baaa = document.querySelector(".clik")
function baa(){
    baaa.classList.add("baa")
    setTimeout(() => {
      baaa.classList.remove("baa")
    }, 5000);
}

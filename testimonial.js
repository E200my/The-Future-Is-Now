 // Responsive Testimonial slider with timer
  const slides = document.querySelectorAll('.testimonial-slide');
  const img = document.getElementById('testimonial-img');
  const images = [
    'images/TFN children 2.png',
    'images/TFN children 4.png',
    'images/TFN children 3.png'
  ];
  const timerBar = document.getElementById('testimonial-timer-bar');
  let current = 0;
  let timerInterval;
  const testimonialDuration = 5000; // 5 seconds

  function showTestimonial(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
    img.src = images[idx];
    resetTimerBar();
  }

  function nextTestimonial() {
    current = (current + 1) % slides.length;
    showTestimonial(current);
  }

  function prevTestimonial() {
    current = (current - 1 + slides.length) % slides.length;
    showTestimonial(current);
  }

  document.getElementById('testi-prev').onclick = function() {
    prevTestimonial();
  };
  document.getElementById('testi-next').onclick = function() {
    nextTestimonial();
  };

  function resetTimerBar() {
    clearInterval(timerInterval);
    timerBar.style.width = '0%';
    let start = null;
    function animateBar(ts) {
      if (!start) start = ts;
      let progress = ts - start;
      let percent = Math.min(progress / testimonialDuration * 100, 100);
      timerBar.style.width = percent + '%';
      if (percent < 100) {
        timerInterval = requestAnimationFrame(animateBar);
      } else {
        nextTestimonial();
      }
    }
    timerInterval = requestAnimationFrame(animateBar);
  }

  showTestimonial(current);

































// document.addEventListener('DOMContentLoaded', function () {
//     const myCarousel = document.getElementById('myCarousel');
    
//     myCarousel.addEventListener('slid.bs.carousel', function () {
//       const activeItem = this.querySelector('.carousel-item.active');
//       const newImageSrc = activeItem.getAttribute('data-img');
//       document.querySelector('.testi-img img').src = newImageSrc;
//     });
//   });



//   // filter 
//   $(document).ready(function() {
//     const $navLinks = $(".nav-link");
//     const $postBoxes = $(".post-box");

//     const debounce = (func, wait) => {
//         let timeout;
//         return (...args) => {
//             clearTimeout(timeout);
//             timeout = setTimeout(() => func.apply(this, args), wait);
//         };
//     };

//     const filterPosts = (filterValue) => {
//         if (filterValue === "all") {
//             $postBoxes.fadeIn(1000).addClass('active'); // Smooth fade in
//         } else {
//             $postBoxes.fadeOut(1000, function() {
//                 $(this).removeClass('active');
//                 $postBoxes.filter("." + filterValue).fadeIn(1000).addClass('active'); // Smooth fade in
//             });
//         }
//     };

//     const onNavLinkClick = (event) => {
//         event.preventDefault();
//         const filterValue = $(event.currentTarget).data("filter");

//         filterPosts(filterValue);

//         $navLinks.removeClass("active-blog");
//         $(event.currentTarget).addClass("active-blog");
//     };

//     $navLinks.on("click", debounce(onNavLinkClick, 250));
// });




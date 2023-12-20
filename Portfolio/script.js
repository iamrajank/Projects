$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });
  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  var typed = new Typed(".typing", {
    strings: ["Computer Science Engineer", "Web Developer", "Software Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["Computer Science Engineer", "Web Developer", "Software Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1, nav: false },
      600: { items: 2, nav: false },
      1000: { items: 3, nav: false },
    },
  });
});

// Form submission

const scriptURL = 'https://script.google.com/macros/s/AKfycbwKtbGGui5lMaf4iZov-tGUyXDdWl3kATK99HTyWdZAhyL2ES52f67mn1E5cNpMV8Sc/exec'
  const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')


  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""

        },2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })



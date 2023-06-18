let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id =  sec.getAttribute('id');

        if(top >= offset && top < offset+height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200    
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});



const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'C++ Developer', 'Angular Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

function openCV() {
    window.open('images/Shaileshbhai_cv.pdf', '_blank');
}

function toggleContent(id) {
    const aboutSection = document.getElementById(id);
    const shortContent = aboutSection.querySelector("#" + id + "Short");
    const fullContent = aboutSection.querySelector("#" + id + "Full");

    if (shortContent.style.display === "none") {
      shortContent.style.display = "block";
      fullContent.style.display = "none";
    } else {
      shortContent.style.display = "none";
      fullContent.style.display = "block";
    }
  }


  function submitForm(event) {
    event.preventDefault(); 

    // Get form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (!fullName || !email || !subject || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    document.getElementById('contact-form').reset();

    alert('Thank you for your message! We will get back to you soon.');
  }

  document.getElementById('contact-form').addEventListener('submit', submitForm);
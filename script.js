// Small interactivity: smooth scroll and contact form mailto
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for internal nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// Contact form: open default mail client with prefilled body
const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;
    const subject = encodeURIComponent('Portfolio contact from ' + email);
    const body = encodeURIComponent(message + "\n\n— " + email);
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
  });
}

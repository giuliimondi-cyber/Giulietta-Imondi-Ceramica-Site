// Minimal JS: smooth scroll, modal signup, contact form handling (Formspree endpoint placeholder)
document.addEventListener('DOMContentLoaded', function(){
  // smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // signup modal
  window.openSignup = function(courseTitle){
    document.getElementById('modalTitle').textContent = 'Iscrizione: ' + courseTitle;
    document.getElementById('courseField').value = courseTitle;
    document.getElementById('signupModal').setAttribute('aria-hidden','false');
  }
  window.closeSignup = function(){
    document.getElementById('signupModal').setAttribute('aria-hidden','true');
  }

  // handle signup form submit
  const signupForm = document.getElementById('signupForm');
  if(signupForm){
    signupForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Richiesta inviata. Riceverai una risposta via email.');
      signupForm.reset();
      closeSignup();
    });
  }

  // contact form submission via Formspree (placeholder)
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      // allow normal submit to Formspree if action set; here just show message
      setTimeout(()=>{ alert('Grazie — il messaggio è stato inviato (se Formspree è configurato).'); contactForm.reset(); }, 200);
      // Note: to actually send to email, replace action attribute in form with your Formspree url.
      e.preventDefault();
    });
  }

});

Sito statico per "Giulietta Imondi - Ceramista"
=============================================

Contenuto del pacchetto
-----------------------
- index.html           -> Pagina principale del sito (home, about, gallery, courses, CV, contact)
- styles.css           -> Foglio di stile
- script.js            -> Piccole interazioni: smooth scroll, modal, form handling
- assets/              -> Cartella con immagini segnaposto (placeholder)
- cv/                  -> Cartella con placeholder CV PDF (cv/Giulietta_Imondi_CV.pdf)
- README.txt           -> Questo file con istruzioni

Come personalizzare
-------------------
1) Sostituire le immagini:
   - Metti le tue foto nella cartella 'assets' e sostituisci i nomi usati in index.html.
   - Le immagini segnaposto sono: assets/placeholder1.jpg ... placeholder4.jpg, atelier.jpg, course1.jpg

2) CV:
   - Inserisci il tuo CV in PDF in 'cv/Giulietta_Imondi_CV.pdf' (sostituisci il file esistente).

3) Contatti e invio email:
   - Il modulo di contatto utilizza Formspree (https://formspree.io) come servizio per inviare email.
   - Per ricevere i messaggi direttamente nella tua casella:
     a) Vai su https://formspree.io e crea un form (registrazione gratuita).
     b) Copia l'endpoint fornito (es. https://formspree.io/f/xyzabc) e incollalo al posto di {YOUR_FORM_ID}
        nell'attributo 'action' del form (linea near <form id="contactForm" action="...").
   - In alternativa puoi lasciare il link 'mailto:' come fallback (apre il client email dell'utente).

4) Pubblicazione:
   - GitHub Pages: crea un repo e carica tutti i file; abilita Pages dalle impostazioni scegliendo branch main e root.
   - Netlify / Vercel: carica il progetto; entrambi hanno deploy automatici e versioning.
   - Hosting tradizionale: carica i file nella cartella public_html via FTP.

5) Formspree configurazione avanzata:
   - Segui la documentazione Formspree per impostare email di destinazione, autoresponder, protezione spam e integrazione reCAPTCHA.
   - Se preferisci una soluzione serverless personalizzata, posso aiutarti a creare un endpoint AWS Lambda o Netlify Function.

Note legali e privacy
---------------------
- Se raccogli dati personali tramite il modulo (nome, email, messaggi), assicurati di aggiungere una nota sulla privacy e, se necessario, una checkbox di consenso secondo la normativa GDPR.
- Puoi aggiungere una pagina 'Privacy' con le informazioni rilevanti.

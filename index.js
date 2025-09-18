// === Navbar effet scroll ===
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


// === Réservation ===
const resForm = document.getElementById("formReservation");
const resMessage = document.getElementById("resMessage");

if(resForm){
  resForm.addEventListener("submit", function(e){
    e.preventDefault();
    fetch(resForm.action, {
      method: "POST",
      body: new FormData(resForm),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if(response.ok){
        resMessage.innerHTML = `
          <div class="alert alert-success text-center">
            ✅ Votre réservation a été envoyée ! Merci.
          </div>
        `;
        resForm.reset();
      } else {
        resMessage.innerHTML = `
          <div class="alert alert-danger text-center">
            ❌ Oups, une erreur est survenue. Essayez de nouveau.
          </div>
        `;
      }
    }).catch(() => {
      resMessage.innerHTML = `
        <div class="alert alert-danger text-center">
          ❌ Oups, une erreur est survenue. Essayez de nouveau.
        </div>
      `;
    });
  });
}

// === Contact ===
const contactForm = document.getElementById("formContact");
if(contactForm){
  contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if(response.ok){
        alert("📩 Merci pour votre message, nous vous répondrons rapidement !");
        contactForm.reset();
      } else {
        alert("❌ Oups, une erreur est survenue. Essayez de nouveau.");
      }
    }).catch(() => {
      alert("❌ Oups, une erreur est survenue. Essayez de nouveau.");
    });
  });
}

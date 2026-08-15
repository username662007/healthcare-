/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

  const navLinks =
    document.getElementById("navLinks");

  if (navLinks) {
    navLinks.classList.toggle("show");
  }

}


/* =========================
   CONTACT FORM
========================= */

function submitContactForm(event) {

  event.preventDefault();

  const name =
    document.getElementById("name").value.trim();

  const phone =
    document.getElementById("phone").value.trim();

  const email =
    document.getElementById("email").value.trim();

  const message =
    document.getElementById("message").value.trim();


  if (!name || !phone || !message) {

    alert(
      "Please fill in all required fields."
    );

    return;

  }


  /*
    This demo uses the visitor's email app.

    For a real website, connect the form
    to a backend/form service.
  */

  const subject =
    "Healthcare Website Enquiry";

  const body =
    "Name: " + name +
    "\nPhone: " + phone +
    "\nEmail: " + email +
    "\n\nMessage:\n" + message;


  const mailto =
    "mailto:" +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);


  window.location.href = mailto;

}


/* =========================
   CLOSE MOBILE MENU
   AFTER CLICKING A LINK
========================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    const links =
      document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {

      link.addEventListener(
        "click",
        function () {

          const nav =
            document.getElementById("navLinks");

          if (nav) {
            nav.classList.remove("show");
          }

        }
      );

    });

  }
);

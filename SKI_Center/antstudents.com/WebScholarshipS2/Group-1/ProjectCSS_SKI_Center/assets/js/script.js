//  script for header scroll action
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("shadow-sm", window.scrollY > 0);
    header.classList.toggle("bg-white", window.scrollY > 0);
    header.classList.toggle("position-fixed", window.scrollY > 0);
})

//  script for header modal
const myModal = new bootstrap.Modal(
    document.getElementById("searchModal"),
    options,
);
// -------- contact us in landing page script
(() => {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })
// -------------- scrollpy in landing page--------------
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
})


/* Edit here but MINIFY TO ANOTHER DOCUMENT form-submit-min.js, import minified version to html for fast load time */

!(function (e) {
  "use strict";
  document.querySelectorAll(".phone").forEach((input) => {
    input.addEventListener("input", function (e) {
      var number = e.target.value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      e.target.value = number[2] ? "(" + number[1] + ") " + number[2] + (number[3] ? "-" + number[3] : "") : number[1];
    });
  });

  document.querySelectorAll(".main-contact-form").forEach((form) => {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const a = window?.location?.href,
        data = new FormData(form),
        params = new URLSearchParams(new URL(a).search);
      var payload = { websource: "New Wrongful Termination Landing page", URL: a };

      params.forEach((value, name) => {
        payload[name] = value;
      });

      data.forEach((value, name) => {
        payload[name] = value;
      });

      fetch("https://hooks.zapier.com/hooks/catch/2375177/2arxgem/", {
        method: "POST",
        body: JSON.stringify(payload),
      })
        .then((e) => {
          e.text();
        })
        .then((o) => {
          form.reset();
          formSubmitted();
        })
        .catch((e) => {});
    });
  });

  function formSubmitted() {
    window.location.href = "/thank-you";
  }

  function sanitizeInput(input) {
    let cleanInput = input.replace(/</g, "").replace(/>/g, "");
    cleanInput = cleanInput.replace(/'/g, "").replace(/"/g, "");
    return cleanInput;
  }

  const allInputs = document.querySelectorAll("input");
  const allTextAreas = document.querySelectorAll("textarea");

  allInputs.forEach((inputField) => {
    inputField.addEventListener("input", function (e) {
      e.target.value = sanitizeInput(e.target.value);
    });
  });

  allTextAreas.forEach((textArea) => {
    textArea.addEventListener("input", function (e) {
      e.target.value = sanitizeInput(e.target.value);
    });
  });
})(window.jQuery);

$(function () {
  window.addEventListener("hashchange", function () {
    history.replaceState("", document.title, window.location.pathname + window.location.search);
  });

  // only for AB Testing
  document.addEventListener("click", function (e) {
    const intaker = e.target.closest("#icw");
    const headerPhone = e.target.closest("#header-phone");

    if (intaker) {
      window.parent.postMessage("intaker_clicked", "*");
    }
    if (headerPhone) {
      window.parent.postMessage("phone_number_clicked", "*");
    }
  });

  // add variant as body class
  const urlParams = new URLSearchParams(window?.location?.search);
  const variant = urlParams.get('variant');
  document.body.classList.add(`variant-${variant}`);
});
